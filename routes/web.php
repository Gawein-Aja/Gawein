<?php

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
//


// Website route
Route::get('/{path?}', function () {
    return view('website');
})->where('path', '[^user, ^admin]*');

// User route
Route::get('/user/{path?}', function () {
    return view('user');
})->where('path', '.*');

// Admin route
Route::get('/admin/{path?}', function () {
    return view('admin');
})->where('path', '.*');

Auth::routes(['verify' => true]);


