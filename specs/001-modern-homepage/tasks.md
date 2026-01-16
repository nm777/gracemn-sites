# Tasks: Modern Homepage with Navigation

**Input**: Design documents from `/specs/001-modern-homepage/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Test tasks are INCLUDED (Test-First Development required by constitution)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/gracemn/`, `tests/` at repository root
- This is a single-project Laravel application with Inertia frontend
- Paths shown below match the structure defined in plan.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verify project environment is ready for feature implementation

- [x] T001 Verify PHP 8.4.14 and Laravel 12 are installed and running
- [x] T002 Verify Node.js and npm are installed
- [x] T003 Verify PostgreSQL database is configured in .env file
- [x] T004 Run `composer install` to ensure PHP dependencies are up to date
- [x] T005 Run `npm install` to ensure JavaScript dependencies are up to date
- [x] T006 Verify Vite dev server can be started with `npm run dev`
- [x] T007 Verify Laravel application runs with `php artisan serve`
- [x] T008 Run `php artisan migrate` to ensure database schema is current

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T009 Create shared Layout component in resources/js/Pages/Layout.tsx with navigation menu structure
- [x] T010 Configure 404 error page handling in bootstrap/app.php to return custom Inertia response
- [x] T011 Create 404 Not Found component in resources/js/Pages/Errors/NotFound.tsx with navigation back to homepage
- [x] T012 Create resources/js/Pages/Home/ directory structure
- [x] T013 [P] Create resources/js/Pages/VisitUs/ directory structure
- [x] T014 [P] Create resources/js/Pages/Sermons/ directory structure
- [x] T015 [P] Create resources/js/Pages/Music/ directory structure
- [x] T016 [P] Create resources/js/Pages/LiveStream/ directory structure

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View and Navigate Homepage (Priority: P1) 🎯 MVP

**Goal**: Create a modern, accessible homepage with navigation menu that displays all five navigation items and allows users to navigate between them

**Independent Test**: Visit homepage URL, verify navigation menu displays all five items (Home, Visit Us, Sermons, Music, Live Stream), click each link and confirm navigation to correct page

### Tests for User Story 1

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T017 [P] [US1] Create Feature test for homepage route in tests/Feature/Home/HomePageTest.php
- [x] T018 [US1] Create Feature test that homepage returns successful status code in tests/Feature/Home/HomePageTest.php
- [x] T019 [US1] Create Feature test that navigation menu items are present in tests/Feature/Home/HomePageTest.php
- [x] T020 [P] [US1] Create Browser test for navigation functionality in tests/Browser/HomepageNavigationTest.php
- [x] T021 [P] [US1] Create Browser test that clicking navigation links navigates to correct pages in tests/Browser/HomepageNavigationTest.php
- [x] T022 [US1] Create Browser test for keyboard navigation accessibility in tests/Browser/HomepageNavigationTest.php

### Implementation for User Story 1

- [x] T023 [US1] Create HomeController in app/Http/Controllers/HomeController.php with index method
- [x] T024 [US1] Implement HomeController to return Inertia::render('Home/Index') in app/Http/Controllers/HomeController.php
- [x] T025 [US1] Create Homepage component in resources/js/Pages/Home/Index.tsx with clean layout, readable typography (min 14px), and clear visual hierarchy
- [x] T026 [US1] Add homepage content with appropriate white space between sections in resources/js/Pages/Home/Index.tsx
- [x] T027 [US1] Apply shared Layout component to Homepage in resources/js/Pages/Home/Index.tsx
- [x] T028 [US1] Add route for homepage (/) in routes/web.php using HomeController@index
- [x] T029 [US1] Add ARIA attributes to navigation menu for accessibility in resources/js/Pages/Layout.tsx
- [x] T030 [US1] Add visible focus states for keyboard navigation in resources/js/Pages/Layout.tsx
- [x] T031 [US1] Run `vendor/bin/pint --dirty` to format PHP code
- [ ] T032 [US1] Run `php artisan test --compact tests/Feature/Home/HomePageTest.php` to verify tests pass
- [ ] T033 [US1] Run `php artisan test --compact tests/Browser/HomepageNavigationTest.php` to verify tests pass

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - View Placeholder Pages (Priority: P2)

**Goal**: Create placeholder pages for Visit Us, Sermons, Music, and Live Stream sections that display placeholder content indicating these sections are under development

**Independent Test**: Directly access each placeholder page URL (/visit-us, /sermons, /music, /live-stream) and verify appropriate placeholder content is displayed with navigation menu present

### Tests for User Story 2

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T034 [P] [US2] Create Feature test for Visit Us page in tests/Feature/VisitUs/VisitUsPageTest.php
- [x] T035 [P] [US2] Create Feature test for Sermons page in tests/Feature/Sermons/SermonsPageTest.php
- [x] T036 [P] [US2] Create Feature test for Music page in tests/Feature/Music/MusicPageTest.php
- [x] T037 [P] [US2] Create Feature test for Live Stream page in tests/Feature/LiveStream/LiveStreamPageTest.php
- [x] T038 [US2] Create Feature test that all placeholder pages return successful status code in respective test files

### Implementation for User Story 2

- [ ] T039 [P] [US2] Create VisitUsController in app/Http/Controllers/VisitUsController.php with index method
- [ ] T040 [P] [US2] Create SermonsController in app/Http/Controllers/SermonsController.php with index method
- [ ] T041 [P] [US2] Create MusicController in app/Http/Controllers/MusicController.php with index method
- [ ] T042 [P] [US2] Create LiveStreamController in app/Http/Controllers/LiveStreamController.php with index method
- [ ] T043 [US2] Implement VisitUsController to return Inertia::render('VisitUs/Index') in app/Http/Controllers/VisitUsController.php
- [ ] T044 [US2] Implement SermonsController to return Inertia::render('Sermons/Index') in app/Http/Controllers/SermonsController.php
- [ ] T045 [US2] Implement MusicController to return Inertia::render('Music/Index') in app/Http/Controllers/MusicController.php
- [ ] T046 [US2] Implement LiveStreamController to return Inertia::render('LiveStream/Index') in app/Http/Controllers/LiveStreamController.php
- [ ] T047 [P] [US2] Create Visit Us placeholder component in resources/js/Pages/VisitUs/Index.tsx with placeholder content
- [ ] T048 [P] [US2] Create Sermons placeholder component in resources/js/Pages/Sermons/Index.tsx with placeholder content
- [ ] T049 [P] [US2] Create Music placeholder component in resources/js/Pages/Music/Index.tsx with placeholder content
- [ ] T050 [US2] Create Live Stream placeholder component in resources/js/Pages/LiveStream/Index.tsx with placeholder content
- [ ] T051 [US2] Apply shared Layout component to all placeholder pages in resources/js/Pages/\*/Index.tsx
- [ ] T052 [US2] Add routes for all placeholder pages in routes/web.php using respective controllers
- [ ] T053 [US2] Ensure visual consistency (same colors, fonts, navigation positioning) across all pages
- [ ] T054 [US2] Run `vendor/bin/pint --dirty` to format PHP code
- [ ] T055 [US2] Run `php artisan test --compact tests/Feature/VisitUs/VisitUsPageTest.php` to verify tests pass
- [ ] T056 [US2] Run `php artisan test --compact tests/Feature/Sermons/SermonsPageTest.php` to verify tests pass
- [ ] T057 [US2] Run `php artisan test --compact tests/Feature/Music/MusicPageTest.php` to verify tests pass
- [ ] T058 [US2] Run `php artisan test --compact tests/Feature/LiveStream/LiveStreamPageTest.php` to verify tests pass

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Responsive Design Across Devices (Priority: P3)

**Goal**: Ensure homepage and all pages display correctly and are easy to navigate on desktop (1024px+), tablet, and mobile devices with appropriate navigation adaptation

**Independent Test**: Access site from different screen sizes (desktop browser, tablet viewport, mobile viewport) and verify navigation is accessible, content is readable, and mobile navigation works (hamburger menu or stacked links)

### Tests for User Story 3

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T059 [P] [US3] Create Browser test for desktop viewport (1024px+) in tests/Browser/HomepageNavigationTest.php
- [ ] T060 [P] [US3] Create Browser test for tablet viewport in tests/Browser/HomepageNavigationTest.php
- [ ] T061 [P] [US3] Create Browser test for mobile viewport in tests/Browser/HomepageNavigationTest.php
- [ ] T062 [US3] Create Browser test for mobile hamburger menu functionality in tests/Browser/HomepageNavigationTest.php
- [ ] T063 [US3] Create Browser test that content fits screen width without horizontal scrolling in tests/Browser/HomepageNavigationTest.php

### Implementation for User Story 3

- [ ] T064 [US3] Add state management for mobile menu open/close in resources/js/Pages/Layout.tsx
- [ ] T065 [US3] Implement hamburger menu button for mobile view in resources/js/Pages/Layout.tsx
- [ ] T066 [US3] Add mobile navigation menu with all five navigation items in resources/js/Pages/Layout.tsx
- [ ] T067 [US3] Apply Tailwind mobile-first responsive classes: unprefixed for mobile, md: and lg: for larger screens in resources/js/Pages/Layout.tsx
- [ ] T068 [US3] Use `hidden md:block` for desktop navigation menu in resources/js/Pages/Layout.tsx
- [ ] T069 [US3] Use `block md:hidden` for mobile menu toggle in resources/js/Pages/Layout.tsx
- [ ] T070 [US3] Add `aria-expanded` attribute to mobile menu button in resources/js/Pages/Layout.tsx
- [ ] T071 [US3] Add `aria-hidden` attribute to mobile menu when closed in resources/js/Pages/Layout.tsx
- [ ] T072 [US3] Add `aria-label` to hamburger menu button in resources/js/Pages/Layout.tsx
- [ ] T073 [US3] Ensure content wraps or truncates appropriately without breaking layout in all resources/js/Pages/\*/Index.tsx files
- [ ] T074 [US3] Apply Tailwind responsive classes to all page components for appropriate spacing on different screen sizes in resources/js/Pages/Home/Index.tsx and placeholder pages
- [ ] T075 [US3] Run `vendor/bin/pint --dirty` to format PHP code
- [ ] T076 [US3] Run `php artisan test --compact tests/Browser/HomepageNavigationTest.php` to verify tests pass

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T077 [P] Verify all pages load under 2 seconds (performance testing)
- [ ] T078 Verify navigation completes under 3 seconds (performance testing)
- [ ] T079 Run `php artisan test --compact` to verify all tests pass
- [ ] T080 Verify homepage displays correctly on Chrome, Firefox, Safari, and Edge (manual browser testing)
- [ ] T081 Verify navigation menu is visible and accessible via mouse and keyboard on all pages
- [ ] T082 Verify 95% success rate for user completing navigation task (usability testing or reasonable assumption)
- [ ] T083 Verify all accessibility requirements (screen reader compatibility, keyboard navigation)
- [ ] T084 Run `vendor/bin/pint --dirty` to ensure final code formatting
- [ ] T085 Clear all Laravel caches with `php artisan optimize:clear`
- [ ] T086 Clear route cache with `php artisan route:clear`
- [ ] T087 Run quickstart.md validation checklist
- [ ] T088 Test that JavaScript-disabled navigation still works (fallback functionality)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Depends on Layout component from US1 but can be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Depends on Layout and pages from US1/US2 but can be independently testable

### Within Each User Story

- Tests MUST be written and FAIL before implementation
- Tests within a story marked [P] can run in parallel
- Controllers before routes
- React components before route integration
- Core implementation before polish
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational directory creation tasks (T013-T016) marked [P] can run in parallel
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All Feature tests for User Story 2 (T034-T037) marked [P] can run in parallel
- All placeholder page components (T047-T050) marked [P] can run in parallel
- All placeholder controllers (T039-T042) marked [P] can run in parallel
- All Browser tests for User Story 3 (T059-T061) marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 2

```bash
# Launch all Feature tests for User Story 2 together:
Task: "Create Feature test for Visit Us page in tests/Feature/VisitUs/VisitUsPageTest.php"
Task: "Create Feature test for Sermons page in tests/Feature/Sermons/SermonsPageTest.php"
Task: "Create Feature test for Music page in tests/Feature/Music/MusicPageTest.php"
Task: "Create Feature test for Live Stream page in tests/Feature/LiveStream/LiveStreamPageTest.php"

# Launch all placeholder controllers together:
Task: "Create VisitUsController in app/Http/Controllers/VisitUsController.php"
Task: "Create SermonsController in app/Http/Controllers/SermonsController.php"
Task: "Create MusicController in app/Http/Controllers/MusicController.php"
Task: "Create LiveStreamController in app/Http/Controllers/LiveStreamController.php"

# Launch all placeholder components together:
Task: "Create Visit Us placeholder component in resources/js/Pages/VisitUs/Index.tsx"
Task: "Create Sermons placeholder component in resources/js/Pages/Sermons/Index.tsx"
Task: "Create Music placeholder component in resources/js/Pages/Music/Index.tsx"
Task: "Create Live Stream placeholder component in resources/js/Pages/LiveStream/Index.tsx"
```

---

## Parallel Example: User Story 3

```bash
# Launch all Browser viewport tests together:
Task: "Create Browser test for desktop viewport (1024px+) in tests/Browser/HomepageNavigationTest.php"
Task: "Create Browser test for tablet viewport in tests/Browser/HomepageNavigationTest.php"
Task: "Create Browser test for mobile viewport in tests/Browser/HomepageNavigationTest.php"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T008)
2. Complete Phase 2: Foundational (T009-T016) - CRITICAL - blocks all stories
3. Complete Phase 3: User Story 1 (T017-T033)
4. **STOP and VALIDATE**: Test User Story 1 independently
   - Visit homepage URL
   - Verify navigation menu displays all five items
   - Click each navigation link
   - Confirm navigation works correctly
   - Run all US1 tests: `php artisan test --compact tests/Feature/Home/ && php artisan test --compact tests/Browser/HomepageNavigationTest.php`
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (T017-T033)
   - Developer B: User Story 2 (T034-T058)
   - Developer C: User Story 3 (T059-T076)
3. Stories complete and integrate independently
4. All developers coordinate for Phase 6: Polish

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing (Test-First Development is NON-NEGOTIABLE per constitution)
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Run `vendor/bin/pint --dirty` before finalizing each story
- Run `php artisan test --compact` with appropriate filters after implementation
- Use Laravel Boost tools (`search-docs`, `list-artisan-commands`, `tinker`) before writing code
- All pages load under 2 seconds, navigation under 3 seconds (performance requirements)
- All pages must be accessible via assistive technologies (screen readers, keyboard navigation)
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
