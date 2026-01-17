<?php

use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;

it('homepage route exists', function () {
    $this->get('/')
        ->assertStatus(200);
});

it('homepage returns successful response', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});

it('homepage displays navigation menu items', function () {
    Artisan::call('wayfinder:generate');

    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertSee('Home');
    $response->assertSee('Visit Us');
    $response->assertSee('Sermons');
    $response->assertSee('Music');
    $response->assertSee('Live Stream');
});
