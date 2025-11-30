import { Routes, Route } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Capabilities } from '../components/sections/Capabilities';
import { Comparison } from '../components/sections/Comparison';
import { Stats } from '../components/sections/Stats';
import { Dashboard } from '../components/app/dashboard/Dashboard';
import { AppLayout } from '../components/app/layout/AppLayout';
import { StudyView } from '../components/app/study/StudyView';
import { About } from '../components/pages/About';
import { Contact } from '../components/pages/Contact';
import { Login } from '../components/pages/Login';
import { Register } from '../components/pages/Register';
import { PricingPage } from '../components/pages/PricingPage';
import { Schedule } from '../components/app/schedule/Schedule';
import { Settings } from '../components/app/settings/Settings';
import { LegalNotice } from '../components/pages/legal/LegalNotice';
import { Terms } from '../components/pages/legal/Terms';
import { Privacy } from '../components/pages/legal/Privacy';
import { Onboarding } from '../components/pages/Onboarding';

// Landing Page Layout (Wrapper for pages with Header/Footer)
function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

function LandingPage() {
    return (
        <>
            <Hero />
            <Features />
            <Capabilities />
            <Comparison />
            <Stats />
        </>
    );
}

export function AppRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
            <Route path="/pricing" element={<PublicLayout><PricingPage /></PublicLayout>} />

            {/* Legal Routes */}
            <Route path="/legal-notice" element={<PublicLayout><LegalNotice /></PublicLayout>} />
            <Route path="/terms" element={<PublicLayout><Terms /></PublicLayout>} />
            <Route path="/privacy" element={<PublicLayout><Privacy /></PublicLayout>} />

            {/* Onboarding Route */}
            <Route path="/onboarding" element={<Onboarding />} />

            {/* Auth Routes (No Header/Footer) */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* App Routes with Layout */}
            <Route path="/app" element={<AppLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="subject/:id" element={<StudyView />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    );
}
