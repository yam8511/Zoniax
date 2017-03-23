<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Company;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public $fillable = [
        'name', 'email', 'password', 'group', 'company_id'
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
    public function company()
    {
        if ($this->group == 2) {
            return Company::all();
        }

        return Company::where('id', $this->company_id)->first();
    }
}
