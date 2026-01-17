<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class MusicController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Music/Index');
    }
}
