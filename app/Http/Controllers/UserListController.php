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
        $data = [];

        if ($user->group == 2) {
            $data['companies'] = \App\Company::all();
        } elseif ($user->group == 1) {
            $data['companies'] = $user->company();
        } else {
            return redirect('/');
        }

        $data = [
                [
                    'id' => '1',
                    'name' => 'chungyo',
                    'members' => [
                        [
                            'name' => 'aa',
                        ],
                        [
                            'name' => 'bb',
                        ],
                    ]
                ],
                [
                    'id' => '2',
                    'name' => 'zz',
                    'members' => [
                        [
                            'name' => 'zuolar',
                        ],
                        [
                            'name' => 'jia jing',
                        ],
                    ]
                ]
        ];

        $data = json_decode(json_encode($data));
        // dd($data);
        // company->id  to create
        // foreach member in company->members
        // >> member->name

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
        try {
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

            $member = new User();
            // $memeberData = array_only($request->all(), $member->fillable);

            $member->insert($request->all());
            // $member->name = $request->input('name');
            // $member->email = $request->input('email');
            // $member->password = bcrypt($request->input('password'));
            if (!$member->save()) {
                return response()->json([
                    'result' => 'error',
                    'msg' => '新增會員失敗: 系統發生錯誤，請聯絡商家'
                ]);
            };

            return response()->json([
                'result' => 'ok',
                'msg' => '新增會員成功',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'result' => 'error',
                'msg' => '新增會員失敗: 系統發生錯誤，請聯絡商家'
            ]);
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
            return view('show', [
                'user' => $user
            ]);
        } catch (\Exception $e) {
            return
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

        } catch (\Exception $e) {
            return response()->json([
                'result' => 'error',
                'msg' => '編輯會員失敗: 系統發生錯誤，請聯絡商家',
            ]);
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
            $user = \Auth::user();

            // 如果不是admin, 而且公司ID與自己的公司不符合時, 則沒有權限
            if ($user->group != 2) {
                if ($user->company()->id != $request->input('company_id')) {
                    return response()->json([
                        'result' => 'error',
                        'msg' => '刪除會員失敗: 沒有權限',
                    ]);
                }
            }

            $member = User::find($id);
            if (!$member->delete()) {
                return response()->json([
                    'result' => 'error',
                    'msg' => '刪除會員失敗: 系統發生錯誤，請聯絡商家'
                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'result' => 'error',
                'msg' => '刪除會員失敗: 系統發生錯誤，請聯絡商家',
            ]);
        }
    }
}
