import React from 'react';
import NavSection from '@/app/sections/NavSection';
import PageScreens from './PageScreens';

export default function getOfferPage() {
    return (
        <main>
            <NavSection type={0} />
            <PageScreens />
        </main>
    )
}
