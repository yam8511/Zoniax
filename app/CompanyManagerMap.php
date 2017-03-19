<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CompanyManagerMap extends Model
{
    /**
     * 取得對應的公司
     */
    public function company()
    {
        return $this->belongsTo(\App\Company::class);
    }
}
