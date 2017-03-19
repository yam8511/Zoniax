<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Company;
use App\CompanyMemberMap;
use App\CompanyManagerMap;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'group'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * 取得該使用者對應的公司
     */
    public function company() {
        $company = null;
        if ($this->group == 2) {
            // admin
            $company = Company::all();
        } elseif ($this->group == 1) {
            // 業主
            $mappingCompany = CompanyManagerMap::where('manager_id', $this->id)->first();
            if (!is_null($mappingCompany)) {
                $company = $mappingCompany->company;
            }
        } else {
            // 會員
            $mappingCompany = CompanyMemberMap::where('member_id', $this->id)->first();
            if (!is_null($mappingCompany)) {
                $company = $mappingCompany->company;
            }
        }
        return $company;
    }

    /**
     * 取得會員列表
     */
    public function members() {
        $members = null;
        if ($this->group == 2) {
            // admin 取業主列表
            $members = $this->where('group', '1')->get();
        } elseif ($this->group == 1) {
            // 業主 取會員列表
            $companyMapping = CompanyManagerMap::select('company_id')
                ->where('manager_id', $this->id)
                ->first();

            if (!is_null($companyMapping)) {
                $companyId = $companyMapping->company_id;

                $memberMapping = CompanyMemberMap::select('member_id')
                    ->where('company_id', $companyId)
                    ->get();

                $memberIds = $memberMapping->map(function($map) {
                    return $map->member_id;
                })->toArray();

                $members = $this->whereIn('id', $memberIds)->get();
            }
        }
        return $members;
    }

    /**
     * 取得管理者列表
     */
    public function managers() {
        $managers = null;
        if ($this->group == 0) {
            $companyMapping = CompanyMemberMap::select('company_id')
                ->where('member_id', $this->id)
                ->first();

            if (!is_null($companyMapping)) {
                $companyId = $companyMapping->company_id;

                $managerMapping = CompanyManagerMap::select('manager_id')
                    ->where('company_id', $companyId)
                    ->get();

                $managerIds = $managerMapping->map(function($map) {
                    return $map->manager_id;
                })->toArray();

                $managers = $this->whereIn('id', $managerIds)->get();
            }
        } elseif ($this->group = 1) {
            $managers = $this->where('group', 2)->get();
        }
        return $managers;
    }

    /**
     * 取得admin列表
     */
    public function admins() {
        if ($this->group == 2) {
            return $this->where('group', 2)->get();
        }
        return null;
    }
}
