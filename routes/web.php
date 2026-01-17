<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use Illuminate\Http\Middleware\CorsMiddleware;

Route::get('/', [HomeController::class, 'index'])->name('home');

// Route for Vite asset serving in development
if (app()->environment('local')) {
    Route::get('/vite/{path}', [\Laravel\Vite\Controllers\ViteController::class, 'asset'])
        ->where('path', '.*')
        ->name('vite.asset');
}