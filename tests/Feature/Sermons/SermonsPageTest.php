<?php

use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;

it('sermons page exists', function () {
    Artisan::call('wayfinder:generate');

    $this->get('/sermons')
        ->assertStatus(200);
});

it('sermons page returns successful response', function () {
    Artisan::call('wayfinder:generate');

    $response = $this->get('/sermons');

    $response->assertStatus(200);
});

it('sermons page displays placeholder content', function () {
    Artisan::call('wayfinder:generate');

    $response = $this->get('/sermons');

    $response->assertStatus(200);
    $response->assertSee('Sermons');
    $response->assertSee('under development');
});
