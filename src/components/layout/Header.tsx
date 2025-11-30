import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-gray/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-brand-dark" />
                    <span className="text-xl font-bold tracking-tight">Setutor</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/about" className="text-sm font-medium hover:text-brand-orange">About</Link>
                    <Link to="/contact" className="text-sm font-medium hover:text-brand-orange">Contact</Link>
                    <Link to="/pricing" className="text-sm font-medium hover:text-brand-orange">Pricing</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-sm font-medium hover:text-brand-orange">Log in</Link>
                    <Link to="/onboarding">
                        <Button size="sm">Get Started</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
