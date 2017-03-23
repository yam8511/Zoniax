<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = [
            'password' => 113,
            'aa' => 12
        ];

        $keys = \Auth::user()->fillable;

        dd(array_only($data, $keys));
        return view('home', [
            'zz' => 'main'
        ]);
    }
}
