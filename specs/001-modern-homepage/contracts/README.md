# API Contracts: Modern Homepage with Navigation

**Feature**: 001-modern-homepage
**Date**: January 15, 2026

## Overview

This feature is a static navigation and homepage implementation with **no API endpoints** required. All routing is server-side to Inertia.js pages.

## Contracts Status

**No API contracts needed** for this feature because:

1. **Static Content**: All pages display static content, no dynamic data fetching
2. **Server-Side Routing**: Routes return Inertia responses with React components
3. **No Forms**: No user input forms requiring validation
4. **No External APIs**: No integration with third-party services

## Routing Contract

### Server-Side Routes (Laravel)

While not REST API endpoints, the following server-side routes will be created:

| Method | Route          | Controller             | Action  | Purpose          |
| ------ | -------------- | ---------------------- | ------- | ---------------- |
| GET    | `/`            | `HomeController`       | `index` | Homepage         |
| GET    | `/visit-us`    | `VisitUsController`    | `index` | Visit Us page    |
| GET    | `/sermons`     | `SermonsController`    | `index` | Sermons page     |
| GET    | `/music`       | `MusicController`      | `index` | Music page       |
| GET    | `/live-stream` | `LiveStreamController` | `index` | Live Stream page |

**Implementation**: Routes defined in `routes/web.php`

### Inertia Response Pattern

Each route follows this pattern:

```php
return Inertia::render('PageName/Index', [
    // No props needed for static pages
]);
```

**Component Mapping**:

| Route          | Inertia Component  | File Path                                 |
| -------------- | ------------------ | ----------------------------------------- |
| `/`            | `Home/Index`       | `resources/js/Pages/Home/Index.tsx`       |
| `/visit-us`    | `VisitUs/Index`    | `resources/js/Pages/VisitUs/Index.tsx`    |
| `/sermons`     | `Sermons/Index`    | `resources/js/Pages/Sermons/Index.tsx`    |
| `/music`       | `Music/Index`      | `resources/js/Pages/Music/Index.tsx`      |
| `/live-stream` | `LiveStream/Index` | `resources/js/Pages/LiveStream/Index.tsx` |

## Error Handling Contract

### 404 Error Page

**Route**: Non-existent URLs
**Response**: Custom Inertia 404 page with navigation

**Implementation**: Override in `bootstrap/app.php`

```php
->withExceptions(function (Exceptions $exceptions): void {
    $exceptions->render(function (NotFoundHttpException $e, Request $request) {
        return Inertia::render('Errors/NotFound');
    });
})
```

**Component**: `resources/js/Pages/Errors/NotFound.tsx` (or Blade template `resources/views/errors/404.blade.php`)

## Future Considerations

If the feature expands to include dynamic content, the following contracts may be needed:

1. **Page Content API**: Fetch page content from CMS
2. **Navigation API**: Dynamic navigation configuration
3. **Live Stream API**: Embed live stream data
4. **Sermons API**: Fetch sermon archives

**Decision**: Deferring to future features - keeping this feature static as per requirements.

## Summary

| Contract Type      | Count | Details                       |
| ------------------ | ----- | ----------------------------- |
| REST API Endpoints | 0     | Not required for static pages |
| GraphQL Schema     | 0     | Not applicable                |
| Server-Side Routes | 5     | Inertia routes for 5 pages    |
| Error Routes       | 1     | Custom 404 handling           |

**Contract Complexity**: LOW - Static navigation with no API requirements.
