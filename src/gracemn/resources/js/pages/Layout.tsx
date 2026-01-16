import { Link } from '@inertiajs/react';
import * as React from 'react';
import { useState } from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigationItems = [
        { title: 'Home', href: '/' },
        { title: 'Visit Us', href: '/visit-us' },
        { title: 'Sermons', href: '/sermons' },
        { title: 'Music', href: '/music' },
        { title: 'Live Stream', href: '/live-stream' },
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <header className="border-b border-neutral-200 bg-white">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-1">
                        <Link
                            href="/"
                            className="text-xl font-semibold text-neutral-900 hover:text-neutral-600"
                        >
                            GraceMN
                        </Link>
                    </div>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            {navigationItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-base font-medium text-neutral-600 hover:text-neutral-900 focus:ring-2 focus:ring-neutral-400 focus:outline-none"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        type="button"
                        className="block p-2 text-neutral-600 hover:text-neutral-900 focus:ring-2 focus:ring-neutral-400 focus:outline-none md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileMenuOpen}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {mobileMenuOpen && (
                    <nav
                        className="border-b border-neutral-200 bg-white md:hidden"
                        aria-hidden="false"
                    >
                        <ul className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4">
                            {navigationItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="block py-2 text-base font-medium text-neutral-600 hover:text-neutral-900 focus:ring-2 focus:ring-neutral-400 focus:outline-none"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </header>

            <main className="flex-1">{children}</main>
        </div>
    );
}
