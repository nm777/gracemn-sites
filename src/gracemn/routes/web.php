<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/visit-us', [App\Http\Controllers\VisitUsController::class, 'index'])->name('visit-us');
Route::get('/sermons', [App\Http\Controllers\SermonsController::class, 'index'])->name('sermons');
Route::get('/music', [App\Http\Controllers\MusicController::class, 'index'])->name('music');
Route::get('/live-stream', [App\Http\Controllers\LiveStreamController::class, 'index'])->name('live-stream');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
