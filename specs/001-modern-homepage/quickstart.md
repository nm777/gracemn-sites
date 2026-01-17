# Quickstart Guide: Modern Homepage with Navigation

**Feature**: 001-modern-homepage
**Date**: January 15, 2026

## Prerequisites

- PHP 8.4.14
- Laravel 12 project initialized
- Node.js and npm installed
- PostgreSQL database configured (even though not used for this feature)
- Laravel Sail v1 (optional, for Docker-based development)

## Development Setup

### 1. Branch Setup

```bash
# Ensure you're on the feature branch
git checkout 001-modern-homepage

# Verify branch
git branch
```

### 2. Install Dependencies

```bash
# Install PHP dependencies (if not already done)
composer install

# Install JavaScript dependencies
npm install
```

### 3. Environment Configuration

```bash
# Copy environment file if not exists
cp .env.example .env

# Generate application key
php artisan key:generate
```

### 4. Database Setup

```bash
# Run migrations (even though no new migrations for this feature)
php artisan migrate
```

### 5. Start Development Servers

```bash
# Terminal 1: Start Vite dev server
npm run dev

# Terminal 2: Start Laravel application
php artisan serve

# Or using Sail (if configured)
./vendor/bin/sail up
./vendor/bin/sail npm run dev
```

### 6. Verify Setup

```bash
# Visit http://localhost:8000 in browser
# Should see existing application (or Laravel welcome page)
```

## Feature Development Workflow

### Step-by-Step Process

For each development task:

1. **Write Test First**

   ```bash
   # Create test file
   php artisan make:test --pest Feature/Home/HomePageTest

   # Run test (should fail)
   php artisan test --compact tests/Feature/Home/HomePageTest.php
   ```

2. **Implement Feature**
   - Create routes, controllers, or components
   - Use `search-docs` with Laravel Boost for best practices
   - Follow Laravel and Inertia conventions

3. **Format Code**

   ```bash
   vendor/bin/pint --dirty
   ```

4. **Run Tests**

   ```bash
   php artisan test --compact tests/Feature/Home/HomePageTest.php
   ```

5. **Verify in Browser**
   - Visit relevant URL
   - Check functionality works as expected
   - Test responsive design (resize browser, use DevTools)

## Running Specific Tests

### Run All Feature Tests

```bash
php artisan test --compact
```

### Run Single Test File

```bash
php artisan test --compact tests/Feature/Home/HomePageTest.php
```

### Run Browser Tests

```bash
php artisan test --compact tests/Browser/HomepageNavigationTest.php
```

### Filter by Test Name

```bash
php artisan test --compact --filter="renders_homepage"
```

## Development Tools

### Laravel Boost MCP Tools

Always use Boost tools before writing code:

```bash
# Search Laravel documentation
search-docs --queries="routing", "inertia navigation"

# List available Artisan commands
list-artisan-commands

# Test PHP code snippets
tinker
```

### Browser Testing with Pest 4

```bash
# Run browser tests
php artisan test --browser

# Run browser tests with specific filter
php artisan test --compact --filter="homepage_navigation"
```

## Common Commands

### Create Controllers

```bash
php artisan make:controller HomeController
php artisan make:controller VisitUsController
php artisan make:controller SermonsController
php artisan make:controller MusicController
php artisan make:controller LiveStreamController
```

### Create Tests

```bash
# Feature test
php artisan make:test --pest Feature/Home/HomePageTest

# Browser test
php artisan make:test --browser HomeNavigationTest
```

### Clear Caches

```bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
```

### Frontend Build

```bash
# Development build with hot reload
npm run dev

# Production build
npm run build

# Run composer dev (if applicable)
composer run dev
```

## Project Structure Reference

### Files to Create/Modify

**Routes**: `routes/web.php`

- Add routes for /, /visit-us, /sermons, /music, /live-stream

**Controllers**: `app/Http/Controllers/`

- `HomeController.php`
- `VisitUsController.php`
- `SermonsController.php`
- `MusicController.php`
- `LiveStreamController.php`

**Pages**: `resources/js/Pages/`

- `Layout.tsx` (shared navigation)
- `Home/Index.tsx`
- `VisitUs/Index.tsx`
- `Sermons/Index.tsx`
- `Music/Index.tsx`
- `LiveStream/Index.tsx`

**Tests**: `tests/Feature/` and `tests/Browser/`

- `Home/HomePageTest.php`
- `VisitUs/VisitUsPageTest.php`
- `Sermons/SermonsPageTest.php`
- `Music/MusicPageTest.php`
- `LiveStream/LiveStreamPageTest.php`
- `HomeNavigationTest.php` (browser test)

**Error Page**: `resources/views/errors/404.blade.php`

- Custom 404 page with navigation

## Verification Checklist

After implementing the feature:

- [ ] All five pages (Home, Visit Us, Sermons, Music, Live Stream) load successfully
- [ ] Navigation menu is visible on all pages
- [ ] All navigation links work correctly
- [ ] 404 error page displays with navigation back to homepage
- [ ] Design is visually consistent across all pages
- [ ] Pages load in under 2 seconds
- [ ] Navigation completes in under 3 seconds
- [ ] Design works on desktop (1024px+ viewport)
- [ ] Mobile navigation works (hamburger menu)
- [ ] All tests pass: `php artisan test --compact`
- [ ] Code is formatted: `vendor/bin/pint --dirty` shows no changes
- [ ] Keyboard navigation works (Tab through links)
- [ ] Screen reader compatibility verified (ARIA attributes present)

## Troubleshooting

### Frontend Changes Not Reflected

```bash
# Try running dev server
npm run dev

# Or build for production
npm run build
```

### Route Not Found

```bash
# Clear route cache
php artisan route:clear

# List routes to verify
php artisan route:list
```

### Inertia Page Not Loading

```bash
# Verify Inertia is installed
composer show inertiajs/inertia-laravel

# Clear all caches
php artisan optimize:clear

# Check browser console for errors
```

### Tests Failing

```bash
# Run with verbose output
php artisan test --compact --filter="test_name" --fail-fast

# Check test syntax and assertions
# Ensure factories and database are set up correctly
```

## Next Steps

1. Review the task breakdown in `tasks.md`
2. Start with Phase 1: Setup tasks
3. Implement User Story 1 (View and Navigate Homepage) first
4. Test and verify each user story independently
5. Complete Phase 2: Polish after all user stories are done

## Resources

- [Laravel Documentation](https://laravel.com/docs)
- [Inertia.js Documentation](https://inertiajs.com)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [Pest Documentation](https://pestphp.com)
- [React Documentation](https://react.dev)
