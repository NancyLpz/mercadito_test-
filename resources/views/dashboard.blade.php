@extends('layouts.template')

@section("content")

<!-- Content Header (Page header) -->
    <section class="content-header">
		<h1>
			Bienvenido a Mercadito Teapa
			<small>{{ trans('modulos.control', ['modulo' => 'Panel']) }}</small>
		</h1>
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
			<li class="active">{{ trans('modulos.modulo', ['modulo' => 'Dashboard']) }}</li>
		</ol>
    </section>

    <!-- Main content -->
    <section class="content">
		<!-- Small boxes (Stat box) -->
		<div class="row">
			<div class="col-md-12">
				<!--<h1>Welcome to Solatino</h1>-->
			</div>
		</div>
		<!-- /.row -->      
    </section>
    <!-- /.content -->
@endsection

@section("css")    
@endsection

@section("js")    
@endsection