<?php

namespace App\Http\Middleware;

use Closure;

class IsAdmin
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
        if (\Auth::check()) {
            if (!in_array(\Auth::user()->group, [1, 2])) {
                return response()->json([
                    'result' => 'error',
                    'code' => 'A00002',
                    'msg' => '沒有權限',
                ]);
                return redirect('/');
            }
        } else {
            return response()->json([
                'result' => 'error',
                'code' => 'A00001',
                'msg' => '請重新登入',
            ]);
            return redirect('/login');
        }
        return $next($request);
    }
}
