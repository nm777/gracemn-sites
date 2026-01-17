<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class LiveStreamController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('LiveStream/Index');
    }
}
