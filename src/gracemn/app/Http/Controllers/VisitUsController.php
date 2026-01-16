<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class VisitUsController extends Controller
{
    public function index(): \Inertia\Response
    {
        return Inertia::render('VisitUs/Index');
    }
}
