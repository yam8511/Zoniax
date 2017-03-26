<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
    public function index()
    {
        return response()
            ->view('member')
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
     * 註冊頁
     */
    public function register()
    {

    }
}
