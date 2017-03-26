<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function __construct()
    {
        $this->middleware('right_company');
    }

    public function index()
    {
        dd(132);
    }

    public function login()
    {

    }
}
