<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Mercadito Teapa</title>
		<!-- Tell the browser to be responsive to screen width -->
		<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
		<!-- Bootstrap 3.3.7 -->
		<link rel="stylesheet" href="{{ asset('js/bootstrap/dist/css/bootstrap.min.css')}}">
		<!-- Font Awesome -->
		<link rel="stylesheet" href="{{ asset('js/font-awesome/css/font-awesome.min.css')}}">
		<!-- Ionicons -->
		<link rel="stylesheet" href="{{ asset('js/Ionicons/css/ionicons.min.css')}}">
		<!-- Theme style -->
		<link rel="stylesheet" href="{{ asset('css/AdminLTE.min.css')}}">
		<!-- AdminLTE Skins. Choose a skin from the css/skins
			folder instead of downloading all of them to reduce the load. -->
		<link rel="stylesheet" href="{{ asset('css/skins/_all-skins.min.css')}}">
		<!-- Morris chart -->
		<link rel="stylesheet" href="{{ asset('js/morris.js/morris.css')}}">
		<!-- jvectormap -->
		<link rel="stylesheet" href="{{ asset('js/jvectormap/jquery-jvectormap.css')}}">
		<!-- Date Picker -->
		<link rel="stylesheet" href="{{ asset('js/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css')}}">
		<!-- Timer Picker -->
		<link rel="stylesheet" href="{{ asset('js/timepicker/bootstrap-timepicker.min.css')}}">
		<!-- Daterange picker -->
		<link rel="stylesheet" href="{{ asset('js/bootstrap-daterangepicker/daterangepicker.css')}}">
		<!-- bootstrap wysihtml5 - text editor -->
		<link rel="stylesheet" href="{{ asset('js/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css')}}">

		<link rel="stylesheet" href="{{ asset('css/sweetalert2.min.css')}}">

		<!--Select2 -->
		<link rel="stylesheet" href="{{ asset('js/select2/dist/css/select2.min.css')}}" />
		<script data-pace-options='{ "ajax": false, "document": false}'  src="{{ asset('js/PACE/pace.min.js')}}"></script>
		<link rel="stylesheet" href="{{ asset('js/PACE/pace.min.css')}}" />
		<link rel="stylesheet" href="{{ asset('css/CustomStyle.css')}}">
		<link rel="stylesheet" href="{{ asset('css/loading_spinner.css')}}">

		<!-- CSRF Token -->
		<meta name="csrf_token" content="{ csrf_token() }" />

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

		<!--<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">-->

		<!-- Google Font -->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

		@yield('css')
	</head>
	<body class="hold-transition skin-blue sidebar-mini">
		<div class="loader loader-default"></div>
		
		<div class="wrapper">

			@include("layouts.sidebar") 

			<!-- Content Wrapper. Contains page content -->
			<div class="content-wrapper">
				@yield("content")
			</div>

			<!-- /.content-wrapper -->
			<footer class="main-footer">
				@include("layouts.footer")
			</footer>
		</div>
		<!-- ./wrapper -->

		<!-- jQuery 3 -->
		<script src="{{ asset('js/jquery/dist/jquery.min.js')}}"></script>
		<!-- jQuery UI 1.11.4 -->
		<script src="{{ asset('js/jquery-ui/jquery-ui.min.js')}}"></script>
		<!--<script src="https://code.jquery.com/ui/1.12.0-rc.2/jquery-ui.min.js" integrity="sha256-55Jz3pBCF8z9jBO1qQ7cIf0L+neuPTD1u7Ytzrp2dqo=" crossorigin="anonymous"></script>-->

		<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
		<script>
			$.widget.bridge('uibutton', $.ui.button);
		</script>
		<!-- Bootstrap 3.3.7 -->
		<script src="{{ asset('js/bootstrap/dist/js/bootstrap.min.js')}}"></script>
		<!-- Morris.js charts -->
		<script src="{{ asset('js/raphael/raphael.min.js')}}"></script>
		<script src="{{ asset('js/morris.js/morris.min.js')}}"></script>
		<!-- Sparkline -->
		<script src="{{ asset('js/jquery-sparkline/dist/jquery.sparkline.min.js')}}"></script>
		<!-- jvectormap -->
		<script src="{{ asset('js/jvectormap/jquery-jvectormap-1.2.2.min.js')}}"></script>
		<script src="{{ asset('js/jvectormap/jquery-jvectormap-world-mill-en.js')}}"></script>
		<!-- jQuery Knob Chart -->
		<script src="{{ asset('js/jquery-knob/dist/jquery.knob.min.js')}}"></script>
		<script src="{{ asset('js/input-mask/jquery.inputmask.js')}}"></script>
		<script src="{{ asset('js/input-mask/jquery.inputmask.date.extensions.js')}}"></script>
		<script src="{{ asset('js/input-mask/jquery.inputmask.extensions.js')}}"></script>
		
		<!-- daterangepicker -->
		<script src="{{ asset('js/moment/min/moment.min.js')}}"></script>
		<script src="{{ asset('js/bootstrap-daterangepicker/daterangepicker.js')}}"></script>
		<!-- datepicker -->
		<script src="{{ asset('js/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js')}}"></script>
		<!-- Timer Picker -->
		<script src="{{ asset('js/timepicker/bootstrap-timepicker.min.js')}}"></script>
		<!-- Bootstrap WYSIHTML5 -->
		<script src="{{ asset('js/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js')}}"></script>
		<!-- Slimscroll -->
		<script src="{{ asset('js/jquery-slimscroll/jquery.slimscroll.min.js')}}"></script>
		<!-- FastClick -->
		<script src="{{ asset('js/fastclick/lib/fastclick.js')}}"></script>
		<script src="{{ asset('js/sweetalert2.min.js')}}"></script>
		<!--Select2 -->
		<script src="{{ asset('js/select2/dist/js/select2.full.min.js')}}"></script>
		<!-- AdminLTE App -->
		<script src="{{ asset('js/adminlte.min.js')}}"></script>
		
		@yield('js')
	</body>
</html>
