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

Route::get('/', 'IndexController');

Route::get('/admin', function () {
    // return view('admin.dashboard');
    return view('admin.login');
});

Route::get('/admin/orders', function () {
    return view('admin.orders');
});

Route::get('/admin/catalogys', function () {
    return view('admin.catalogys');
});

Route::get('/admin/products', function () {
    return view('admin.products');
});

Route::get('/admin/acounts', function () {
    return view('admin.acounts');
});

Route::get('/admin/news', function () {
    return view('admin.news');
});