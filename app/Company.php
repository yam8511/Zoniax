<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Company extends Model
{
    /**
     * 取得公司的會員列表
     */
    public function userlist()
    {
        return User::where('company_id', $this->id)->get();
    }

    /**
     * 取得公司的管理者列表
     */
    public function managers()
    {
        return $this->userlist()->filter(function ($user) {
            return $user->group > 0;
        })->flatten();
    }

    /**
     * 取得公司的會員列表
     */
    public function members()
    {
        return $this->userlist()->filter(function ($user) {
            return $user->group == 0;
        })->flatten();
    }
}
