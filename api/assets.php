<?php
// Serve static assets for Vercel PHP
$requestUri = $_SERVER['REQUEST_URI'] ?? '';

// Extract path from /assets/... 
// Handle both /assets/css/style.css and /api/assets.php/css/style.css
$path = parse_url($requestUri, PHP_URL_PATH);

// Remove /api/assets.php prefix if present
$path = preg_replace('#^/api/assets\.php#', '', $path);

// Extract path after /assets/
if (preg_match('#^/assets/(.+)$#', $path, $matches)) {
    $path = $matches[1];
} else {
    // If no /assets/ prefix, try to get from query string or use as-is
    $path = ltrim($path, '/');
}

// Security: prevent directory traversal
if (empty($path) || strpos($path, '..') !== false || strpos($path, '//') !== false) {
    http_response_code(403);
    exit('Forbidden');
}

// Map to actual file
$filePath = __DIR__ . '/../assets/' . $path;

// Check if file exists
if (!file_exists($filePath) || !is_file($filePath)) {
    http_response_code(404);
    exit('Not Found: ' . $path);
}

// Determine content type
$ext = strtolower(pathinfo($filePath, PATHINFO_EXTENSION));
$contentTypes = [
    'css' => 'text/css; charset=utf-8',
    'js' => 'application/javascript; charset=utf-8',
    'png' => 'image/png',
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'svg' => 'image/svg+xml',
    'gif' => 'image/gif',
    'ico' => 'image/x-icon',
    'woff' => 'font/woff',
    'woff2' => 'font/woff2',
    'ttf' => 'font/ttf',
    'eot' => 'application/vnd.ms-fontobject',
];

$contentType = $contentTypes[$ext] ?? 'application/octet-stream';

// Set headers
header('Content-Type: ' . $contentType);
header('Cache-Control: public, max-age=31536000');

// Output file
readfile($filePath);

