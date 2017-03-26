<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index');

/*
 |------------------------------------------
 | 各商家頁面
 |------------------------------------------
 | * 首頁
 | * 登入頁
 | * 註冊頁
 */

Route::group([
    'prefix' => '{company}',
], function () {
    Route::get('/', 'MemberController@index');
    Route::get('/login', 'MemberController@login');
    Route::post('/login', 'MemberController@login');
    Route::get('/register', 'MemberController@register');
    Route::post('/register', 'MemberController@register');
});

/*
 |------------------------------------------
 | 管理後台
 |------------------------------------------
 | * 編輯商家資訊頁面
 | * 使用者列表
 | * 商家列表
 */

Route::group([
    'prefix' => 'manager',
], function () {
    Route::resource('userlist', 'UserListController');
    Route::resource('company', 'CompanyController');
});
