<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class SermonsController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('Sermons/Index');
    }
}
