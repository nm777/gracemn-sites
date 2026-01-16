<?php

use Tests\Browser;
use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;

it('placeholder pages display correctly on desktop viewport (1024px+)', function () {
    Artisan::call('wayfinder:generate');

    $page = visit('/visit-us');

    $page->assertSee('Visit Us');
    $page->assertSee('under development');

    $page->visit('/sermons')
        ->assertSee('Sermons')
        ->assertSee('under development');

    $page->visit('/music')
        ->assertSee('Music')
        ->assertSee('under development');

    $page->visit('/live-stream')
        ->assertSee('Live Stream')
        ->assertSee('under development');
});

it('placeholder pages display correctly on tablet viewport', function () {
    Artisan::call('wayfinder:generate');

    $page = visit('/visit-us');

    $page->assertSee('Visit Us');
    $page->assertSee('under development');
});

it('placeholder pages display correctly on mobile viewport', function () {
    Artisan::call('wayfinder:generate');

    $page = visit('/visit-us');

    $page->assertSee('Visit Us');
    $page->assertSee('under development');
});
