@extends('layouts.login_template')

@section('content')
    {{ Form::open(array('route' => 'access','method' => 'post')) }}
      @if (Session::has('error'))
        <div class="alert alert-error">
          {{ Session::get('error') }}
        </div>
      @endif
      <div class="form-group has-feedback">
        {!! Form::email('email', null, array("class"=>"form-control","placeholder"=>__('text_login.label_email'))) !!}
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        {!! Form::password('password', array("class"=>"form-control","placeholder"=> __('text_login.label_password'))) !!}        
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox icheck">
            <label>
              <input name="reminder" type="checkbox"> {{ __('text_login.label_recuerdame') }}
            </label>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat">{{ __('text_login.btn_login') }}</button>
        </div>
        <!-- /.col -->
      </div>
    {{Form::close()}}


    <a href="#">{{ __('text_login.label_recuperar') }}</a><br>

@endsection