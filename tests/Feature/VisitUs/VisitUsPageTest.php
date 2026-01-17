<?php

use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;

it('visit us page exists', function () {
    Artisan::call('wayfinder:generate');

    $this->get('/visit-us')
        ->assertStatus(200);
});

it('visit us page returns successful response', function () {
    Artisan::call('wayfinder:generate');

    $response = $this->get('/visit-us');

    $response->assertStatus(200);
});

it('visit us page displays placeholder content', function () {
    Artisan::call('wayfinder:generate');

    $response = $this->get('/visit-us');

    $response->assertStatus(200);
    $response->assertSee('Visit Us');
    $response->assertSee('under development');
});
