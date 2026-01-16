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

it('homepage displays correctly on desktop viewport', function () {
    Artisan::call('wayfinder:generate');

    $page = visit('/');

    $page->assertSee('Home');
    $page->assertSee('Visit Us');
    $page->assertSee('Sermons');
    $page->assertSee('Music');
    $page->assertSee('Live Stream');
});

it('homepage displays correctly on tablet viewport', function () {
    Artisan::call('wayfinder:generate');

    $page = visit('/');

    $page->assertSee('Home');
    $page->assertSee('Visit Us');
    $page->assertSee('Sermons');
    $page->assertSee('Music');
    $page->assertSee('Live Stream');
});

it('homepage displays correctly on mobile viewport', function () {
    Artisan::call('wayfinder:generate');

    $page = visit('/');

    $page->assertSee('Home');
    $page->assertSee('Visit Us');
    $page->assertSee('Sermons');
    $page->assertSee('Music');
    $page->assertSee('Live Stream');
});

it('mobile hamburger menu is visible and functional', function () {
    Artisan::call('wayfinder:generate');

    $page = visit('/');

    $page->assertSee('Toggle navigation menu');
});

