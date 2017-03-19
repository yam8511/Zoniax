<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * 控管端首頁
     */
    public function index()
    {
        $user = \Auth::user();
        $viewData = [];

        if ($user->group == 1) {
            $viewData = [
                'user' => $user,
            ];
        } else {
            $viewData = [
                'user' => $user,
            ];
        }

        return view('admin.index', $viewData);
    }

    /**
     * 帳號列表
     */
    public function memberList()
    {
        
    }
}
