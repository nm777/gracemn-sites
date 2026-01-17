<?php

use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;

it('music page exists', function () {
    Artisan::call('wayfinder:generate');

    $this->get('/music')
        ->assertStatus(200);
});

it('music page returns successful response', function () {
    Artisan::call('wayfinder:generate');

    $response = $this->get('/music');

    $response->assertStatus(200);
});

it('music page displays placeholder content', function () {
    Artisan::call('wayfinder:generate');

    $response = $this->get('/music');

    $response->assertStatus(200);
    $response->assertSee('Music');
    $response->assertSee('under development');
});
