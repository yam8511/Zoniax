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
 | * 登入
 | * 註冊
 | * 取得資訊
 */

Route::group([
    'prefix' => '{company}',
], function () {
    Route::get('/', 'MemberController@index');
    Route::get('/info', 'MemberController@info');
    Route::post('/login', 'MemberController@login');
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
