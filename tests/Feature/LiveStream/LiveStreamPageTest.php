<?php

use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;

it('live stream page exists', function () {
    Artisan::call('wayfinder:generate');

    $this->get('/live-stream')
        ->assertStatus(200);
});

it('live stream page returns successful response', function () {
    Artisan::call('wayfinder:generate');

    $response = $this->get('/live-stream');

    $response->assertStatus(200);
});

it('live stream page displays placeholder content', function () {
    Artisan::call('wayfinder:generate');

    $response = $this->get('/live-stream');

    $response->assertStatus(200);
    $response->assertSee('Live Stream');
    $response->assertSee('under development');
});
