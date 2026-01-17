<?php

namespace App\Http\Controllers\Vite;

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\File;

class ViteController extends Application
{
    /**
     * Serve Vite-generated assets.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function asset(Request $request, $path)
    {
        $assetPath = public_path('build/' . $path);
        
        if (!File::exists($assetPath)) {
            abort(404, 'Asset not found');
        }
        
        $mimeType = $this->getMimeType($assetPath);
        
        $response = response(File::get($assetPath), 200, [
            'Content-Type' => $mimeType,
            'Cache-Control' => 'no-cache, must-revalidate',
            'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers' => 'Content-Type, Authorization, X-Requested-With',
        ]);
        
        return $response;
    }
    
    /**
     * Get MIME type for file.
     *
     * @param  string $path
     * @return string
     */
    protected function getMimeType(string $path): string
    {
        $extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));
        
        return match ($extension) {
            'css' => 'text/css',
            'js' => 'application/javascript',
            'json' => 'application/json',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'svg' => 'image/svg+xml',
            'ico' => 'image/x-icon',
            'woff' => 'font/woff',
            'woff2' => 'font/woff2',
            'ttf' => 'font/ttf',
            'eot' => 'application/vnd.ms-fontobject',
            default => 'text/plain',
        };
    }
}