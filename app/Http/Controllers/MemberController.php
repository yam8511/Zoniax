<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Company;

class MemberController extends Controller
{
    private $company = null;

    public function __construct()
    {
        $this->middleware('right_company');
        $companyName = request()->route()->parameter('company');
        $this->company = Company::where('name', $companyName)->first();
    }

    /**
     * 首頁
     */
    public function index(Request $request)
    {
        dd($request->cookie('T1T'));
        $cookieName = "{$this->company->name}_u";
        return redirect('/')->cookie('TT', \Auth::user());
        // ->cookie($cookieName, \Auth::user(), 60);
        dd();

        $user = User::find($request->cookie('CU'));
        $data = [
            'user' => $user,
            'company' => $this->company,
        ];

        return response()
            ->view('member', $data)
            ->cookie('CID', $this->company->id, 60);
    }

    /**
     * 資訊
     */
    public function info(Request $request)
    {
        dd($request->cookie('CID'));
    }

    /**
     * 登入頁
     */
    public function login(Request $request)
    {
        // dd($request->cookie('CID'));
        $email = $request->input('email');
        $name = $request->input('name');
        $password = bcrypt($request->input('password'));
dd($password);
        $user = User::whereRaw("(`email`='{$email}' OR `name`='{$name}') AND `password`='{$password}'")->first();
        dd($user);
        if (is_null($user)) {
            return redirect("/{$this->company->name}");
        }

        // 如果登入成功, 導回商家首頁
        $cookieName = "{$this->company->name}_u";
        return redirect("/{$this->company->name}")->cookie($cookieName, $user);
    }

    /**
     * 註冊頁
     */
    public function register()
    {
    }
}
