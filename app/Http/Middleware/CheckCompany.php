<?php

namespace App\Http\Middleware;

use Closure;
use App\Company;

class CheckCompany
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        # 取得Url上的商家帳戶名稱
        $routeCompany = $request->route()->parameter('company');

        # 判斷該商家有沒有存在
        $existCompany = \App\Company::where('name', $routeCompany)->count();

        # 若不存在則跳 404
        if ($routeCompany === null || $existCompany === 0) {
            abort(404, '商家不存在');
        }
        
        return $next($request);
    }
}
