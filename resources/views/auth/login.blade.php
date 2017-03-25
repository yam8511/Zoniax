@extends('layouts.app')

@section('content')
<div id="main-body" class="clearfix">
    <div id="page-body">
        <div class="login-wrap">
            <div class="login">
                <div class="message"></div>
                <form class="form-horizontal" role="form" method="POST" action="{{ route('login') }}">
                    {{ csrf_field() }}
                    <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                        <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                        <div class="user col-md-6">
                            <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                            @if ($errors->has('email'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                        <label for="password" class="col-md-4 control-label">Password</label>

                        <div class="pwd col-md-6">
                            <input id="password" type="password" class="form-control" name="password" required>

                            @if ($errors->has('password'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-6 col-md-offset-4">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-8 col-md-offset-4">
                            <button type="submit" class="btn btn-primary" id="Login">
                                Login
                            </button>

                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                Forgot Your Password?
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
<script src="{{ url('js/jquery-1.9.1.js') }}" charset="utf-8"></script>
<script>
jQuery(document).ready(function () {
    $("input").focus(function() {
        $(this).css("color","#011591");
        $(this).css("background-color","#FFFFCC");
        $(this).css("border","none");
    });
    $("input").blur(function() {
        $(this).css("color","#000");
        $(this).css("background-color","#FFF");
        $(this).css("background-color","#FFF");
    });

    $('#Login')
    .on('click',function() {
        $("#Login").animate({
            width: "80px",
            height:"50px",
            'font-size': "25px",
        },500)
    })
    .on('mouseout',function() {
        $("#Login").animate({
            width: "70px",
            height:"40px",
            'font-size': "20px"
        },1500)
    });
});

</script>
