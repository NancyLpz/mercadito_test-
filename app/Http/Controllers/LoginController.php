<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;
use App\Parametros;
use Validator;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        
        return view("login/index");
    }

    public function access(Request $request) {
        

    	$rules = array(
            'email'    => 'email|required',
            'password'    => 'required'
        );

        $validator = Validator::make($request->all(), $rules);
       
        if ($validator->fails()) {
            return redirect()->route('login')->withErrors($validator)->withInput();
        } else {
            // store
            $credentials = array(
                'email'    => $request->input("email"),
                'password' => $request->input("password"),
            );

            $result = Sentinel::authenticate($credentials);

            if($result!=null){

            	return redirect()->route('dashboard');
            }

			$request->session()->flash('error', 'Usuario y password incorrectos');

            return redirect()->route('login');
        }

    }

    public function logout(Request $request){

        Sentinel::logout();

        return redirect()->route('login');
    }
}
