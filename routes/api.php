<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'auth'
],
    function () {
        Route::post('login', 'AuthController@login');
        Route::post('signup', 'AuthController@signup');

        Route::get('signup/activate/{token}', 'AuthController@signupActivate');
        Route::group([
            'middleware' => 'auth:api'
        ],
    function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
        Route::get('posting', 'PostingController@showAll');
        Route::get('getpost', 'PostingController@index');
        Route::post('post', 'PostingController@store');
        Route::get('post/{id}', 'PostingController@show');
        Route::put('postupdate/{id}', 'PostingController@update');
        Route::delete('postdelete/{id}', 'PostingController@destroy');
    });
});
