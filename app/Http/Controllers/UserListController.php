<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = \Auth::user();
        $data = ['user' => $user];
        if ($user->group == 2) {
            $data ['companies'] = $user->company();
        } else {
            $data ['companies'] = [$user->company()];
        }

        return view('userlist.index', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = \Auth::user();

        // 如果不是admin, 而且公司ID與自己的公司不符合時, 則沒有權限
        if ($user->group != 2) {
            if ($user->company()->id != $request->input('company_id')) {
                return response()->json([
                    'result' => 'error',
                    'msg' => '新增會員失敗: 沒有權限',
                ]);
            }
        }

        try {
            // 驗證新增會員資料
            // password.confirmed 自動抓 password_confirmation 欄位
            $validator = \Validator::make($request->all(), [
                'name' => 'required|max:255',
                'email' => 'required|email|max:255',
                'password' => 'required|min:6|confirmed',
            ], [
                'name.required' => '名稱必填',
                'name.max' => '名稱字數最多只能填入255個字',
                'email.required' => 'E-mail必填',
                'email.email' => '請填入正確的E-mail格式',
                'email.max' => 'E-mail字數最多只能填入255個字',
                'password.required' => '密碼必填',
                'password.min' => '密碼最少須6碼',
                'password.confirmed' => '密碼確認錯誤'
            ]);

            // 如果驗證失敗，回傳錯誤訊息
            if ($validator->fails()) {
                return response()->json([
                    'result' => 'warning',
                    'msg' => $validator->errors(),
                ]);
            }

            // 檢查該公司會員有沒有已經存在的Email
            $company = \App\Company::findOrFail($request->input('company_id'));
            $mail = $request->input('email');

            // 先檢查管理者們的Email
            $exists = $company->managers()->contains(function ($manager, $key) use ($mail) {
                return $manager->email == $mail;
            });

            // 如果存在, 回傳錯誤
            if ($exists) {
                return response()->json([
                    'result' => 'warning',
                    'msg' => [
                        'email' => ['Email已存在, 請輸入新的Email']
                    ],
                ]);
            } else {
                // 如果不存在, 檢查會員們的Email
                if ($company->members()
                    ->contains(function ($member, $key) use ($mail) {
                        return $member->email == $mail;
                    })
                ) {
                    return response()->json([
                        'result' => 'warning',
                        'msg' => [
                            'email' => ['Email已存在, 請輸入新的Email']
                        ],
                    ]);
                }
            }

            // 新增使用者
            $member = new \App\User();
            $member->name = $request->input('name');
            $member->email = $request->input('email');
            $member->password = bcrypt($request->input('password'));
            $member->company_id = $request->input('company_id');
            if ($user->group == 1) {
                $member->group = 0;
            } else {
                $member->group = $request->input('group', 0);
            }

            if (!$member->save()) {
                return response()->json([
                    'result' => 'error',
                    'msg' => '新增會員失敗: 系統發生錯誤，請聯絡商家'
                ]);
            };

            return response()->json([
                'result' => 'ok',
                'msg' => '新增會員成功',
                'data' => $member,
            ]);

        } catch (\Exception $e) {
            return $this->catchError($e, '新增會員失敗: 系統發生錯誤，請聯絡商家');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $user = User::find($id);
            if ($user->group == 2) {
                return redirect()->route('userlist.index');
            }

            return view('userlist.index', [
                'user' => $user,
                'companies' => $user->company(),
            ]);
        } catch (\Exception $e) {
            return $this->catchError($e, "檢視會員失敗, ID: {$id}");
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $admin = \Auth::user();
            $user = User::findOrFail($id);

            // 如果不是admin, 而且公司ID與自己的公司不符合時, 則沒有權限
            if ($user->group != 2) {
                if ($user->company()->id != $admin->company()->id
                || $admin->group < $user->group
                ) {
                    return response()->json([
                        'result' => 'error',
                        'msg' => '編輯會員失敗: 沒有權限',
                    ]);
                }
            }

            // 驗證新增會員資料
            // password.confirmed 自動抓 password_confirmation 欄位
            $validator = \Validator::make($request->all(), [
                'password' => 'min:6|confirmed',
                'group' => 'numeric|in:0,1',
                'company_id' => 'numeric|exists:companies.id'
            ], [
                'password.required' => '密碼必填',
                'password.min' => '密碼最少須6碼',
                'password.confirmed' => '密碼確認錯誤',
                'group' => '區分角色無效',
                'company_id' => '商家ID無效',
            ]);

            // 如果驗證失敗，回傳錯誤訊息
            if ($validator->fails()) {
                return response()->json([
                    'result' => 'warning',
                    'msg' => $validator->errors(),
                ]);
            }

            // 更新會員
            $user->update(array_only($request->all(), $user->fillable));

            return response()->json([
                'result' => 'success',
                'msg' => '編輯會員成功',
            ]);

        } catch (\Exception $e) {
            return $this->catchError($e, '編輯會員失敗: 系統發生錯誤，請聯絡商家');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $admin = \Auth::user();
            $user = \User::findOrFail($id);

            // 如果不是admin, 而且公司ID與自己的公司不符合時, 則沒有權限
            if ($user->group != 2) {
                if ($user->company()->id != $admin->company()->id
                || $admin->group < $user->group
                ) {
                    return response()->json([
                        'result' => 'error',
                        'msg' => '刪除會員失敗: 沒有權限',
                    ]);
                }
            }

            if (!$user->delete()) {
                return response()->json([
                    'result' => 'error',
                    'msg' => '刪除會員失敗: 系統發生錯誤，請聯絡商家'
                ]);
            }
        } catch (\Exception $e) {
            return $this->catchError($e, '刪除會員失敗: 系統發生錯誤，請聯絡商家');
        }
    }

    /**
     * 回傳一個錯誤回應
     */
    private function catchError($e, $msg)
    {
        $user = \Auth::user();
        if ($user->group == 2) {
            return response()->json([
                'result' => 'error',
                'msg' => $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(),
            ]);
        }

        return response()->json([
            'result' => 'error',
            'msg' => '新增會員失敗: 系統發生錯誤，請聯絡商家'
        ]);
    }
}
