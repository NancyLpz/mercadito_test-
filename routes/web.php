<?php
use App\Http\Middleware\AdminAccess;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'admin', "middleware"=>['AdminAccess']], function() {

	Route::get('/', 'Admin\DashboardController@index')->name('admin');
	Route::get('dashboard', 'Admin\DashboardController@index')->name('dashboard');
	Route::get('logout', 'LoginController@logout')->name("logout");

});

Route::get('login', 'LoginController@index')->name("login");
Route::post('access', 'LoginController@access')->name("access");
Route::get('/', 'Web\WebController@index')->name("web");


