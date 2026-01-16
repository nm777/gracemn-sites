<?php

use Tests\Browser;
use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;

it('homepage displays correctly on desktop viewport (1024px+)', function () {
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
