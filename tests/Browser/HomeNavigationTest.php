<?php

use Tests\Browser;
use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;

it('homepage navigation is visible', function () {
    Artisan::call('wayfinder:generate');

    $page = visit('/');

    $page->assertSee('Home');
    $page->assertSee('Visit Us');
    $page->assertSee('Sermons');
    $page->assertSee('Music');
    $page->assertSee('Live Stream');
});

it('clicking navigation links navigates to correct pages', function () {
    Artisan::call('wayfinder:generate');

    $page = visit('/');

    $page->click('Visit Us')
        ->assertPathIs('/visit-us');

    $page->click('Sermons')
        ->assertPathIs('/sermons');

    $page->click('Music')
        ->assertPathIs('/music');

    $page->click('Live Stream')
        ->assertPathIs('/live-stream');
});

it('keyboard navigation works', function () {
    Artisan::call('wayfinder:generate');

    $page = visit('/');

    $page->assertSee('Home');
    $page->assertSee('Visit Us');
    $page->assertSee('Sermons');
    $page->assertSee('Music');
    $page->assertSee('Live Stream');

    $page->click('Visit Us');
    $page->assertPathIs('/visit-us');
});
