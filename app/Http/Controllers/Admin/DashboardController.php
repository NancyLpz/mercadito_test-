<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Info;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller {
    public function index(){
        return view("dashboard");
    }
}
