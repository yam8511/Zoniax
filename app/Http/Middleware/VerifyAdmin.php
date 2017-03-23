<?php

namespace App\Http\Middleware;

use Closure;

class VerifyAdmin
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
                return redirect('/');
            }
        } else {
            return redirect('/login');
        }
        return $next($request);
    }
}
