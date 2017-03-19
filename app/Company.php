<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\CompanyMemberMap;
use App\CompanyManagerMap;

class Company extends Model
{
    /**
     * 取得公司的會員列表
     */
    public function members()
    {
        $members = CompanyMemberMap::where('company_id', $this->id)->get();
        return $members;
    }

    /**
     * 取得公司的管理者列表
     */
    public function managers()
    {
        $managers = CompanyManagerMap::where('company_id', $this->id)->get();
        return $managers;
    }
}
