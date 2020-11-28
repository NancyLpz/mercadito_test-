<header class="main-header">
    <!-- Logo -->
    <a href="javascript:void(0)" class="logo">
      	<!-- mini logo for sidebar mini 50x50 pixels -->
      	<span class="logo-mini"><b>M</b>P</span>
      	<!-- logo for regular state and mobile devices -->
      	<span class="logo-lg"><b>Mercadito</b>Teapa</span>
    </a>
    	<!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      	<!-- Sidebar toggle button-->
      	<a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        	<span class="sr-only">Toggle navigation</span>
      	</a>
        <a style="margin:7px 25px 0 0;float:right" class="btn btn-default" href="{{route('logout')}}"><i class="fa fa-sign-out"></i> &nbsp;Cerrar sesión</a> 

        <!--<a style="margin:7px 25px 0 0;float:right" target="_blank" class="btn btn-default" href="{{route('web')}}"><i class="fa fa-share"></i> &nbsp;Ver sitio</a>-->


    </nav>
</header>

<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">
	<!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      	<!-- Sidebar user panel -->
      	<div class="user-panel">
        	<div class="pull-left image">
          		<img src="{{ url('img/user2-160x160.jpg')}}" class="img-circle" alt="User Image">
        	</div>
        	<div class="pull-left info">
          		<p>Admin</p>
          		<a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        	</div>
      	</div>      
    </section>
    <!-- /.sidebar -->
</aside>