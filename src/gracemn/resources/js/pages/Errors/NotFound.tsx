import { Link } from '@inertiajs/react';

export function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-50 px-4">
            <div className="max-w-md text-center">
                <h1 className="mb-4 text-6xl font-bold text-neutral-900">
                    404
                </h1>
                <p className="mb-8 text-xl text-neutral-600">Page Not Found</p>
                <p className="mb-8 text-base text-neutral-500">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-neutral-700 focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:outline-none"
                >
                    Go back to homepage
                </Link>
            </div>
        </div>
    );
}
