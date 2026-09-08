'use client';

import { usePathname } from 'next/navigation';
import { AppShell, AppShellHeader, AppShellNavbar, AppShellMain } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from './Header';
import Sidebar from './Sidebar';
import { useAuthStore } from '@/features/auth/authStore';

const AUTH_ROUTES = ['/auth/login', '/auth/signup'];

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    const pathname = usePathname();
    const token = useAuthStore((s) => s.token);
    const isLoggedIn = !!token;

    const isAuthPage = AUTH_ROUTES.some((r) => pathname.startsWith(r));
    const isPlanBrowsingRoute = pathname.startsWith('/workouts') || pathname.startsWith('/diets');

    // Sidebar/Navbar is shown if:
    // 1. User is logged in (and not on an auth page)
    // 2. OR user is not logged in, but is on a plan browsing route (selected "Browse plans without account")
    const showNavbar = !isAuthPage && (isLoggedIn || isPlanBrowsingRoute);

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={
                showNavbar
                    ? {
                          width: 300,
                          breakpoint: 'sm',
                          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
                      }
                    : undefined
            }
            padding="md"
        >
            <AppShellHeader>
                <Header
                    mobileOpened={mobileOpened}
                    toggleMobile={toggleMobile}
                    desktopOpened={desktopOpened}
                    toggleDesktop={toggleDesktop}
                    showNavbar={showNavbar}
                />
            </AppShellHeader>

            {showNavbar && (
                <AppShellNavbar>
                    <Sidebar toggle={toggleMobile} />
                </AppShellNavbar>
            )}

            <AppShellMain>{children}</AppShellMain>
        </AppShell>
    );
}
