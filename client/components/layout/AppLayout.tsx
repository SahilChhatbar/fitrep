'use client';

import { usePathname } from 'next/navigation';
import { AppShell, AppShellHeader, AppShellNavbar, AppShellMain } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from './Header';
import Sidebar from './Sidebar';

const AUTH_ROUTES = ['/auth/login', '/auth/signup'];

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    const pathname = usePathname();

    const isAuthPage = AUTH_ROUTES.some((r) => pathname.startsWith(r));

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={
                isAuthPage
                    ? undefined
                    : {
                          width: 300,
                          breakpoint: 'sm',
                          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
                      }
            }
            padding="md"
        >
            <AppShellHeader>
                <Header
                    mobileOpened={mobileOpened}
                    toggleMobile={toggleMobile}
                    desktopOpened={desktopOpened}
                    toggleDesktop={toggleDesktop}
                />
            </AppShellHeader>

            {!isAuthPage && (
                <AppShellNavbar>
                    <Sidebar toggle={toggleMobile} />
                </AppShellNavbar>
            )}

            <AppShellMain>{children}</AppShellMain>
        </AppShell>
    );
}
