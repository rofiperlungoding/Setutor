import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10">
            <Section className="!py-0">
                <div className="flex flex-col items-center text-center mb-20">
                    <Link to="/" className="mb-4 flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="h-6 w-6 rounded-full bg-brand-orange" />
                        <span className="font-bold text-lg">Setutor</span>
                    </Link>
                    <h2 className="text-3xl font-bold mb-8">Start Learning with Setutor.</h2>
                    <div className="flex gap-6 text-sm font-medium text-gray-600 mb-8">
                        <span>✓ Free to start</span>
                        <span>✓ No credit card required</span>
                        <span>✓ Cancel anytime</span>
                    </div>
                    <Link to="/onboarding">
                        <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                            Start Studying Free
                        </Button>
                    </Link>
                </div>

                <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2025 Setutor. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/legal-notice" className="hover:text-black">Legal Notice</Link>
                        <Link to="/terms" className="hover:text-black">Terms</Link>
                        <Link to="/privacy" className="hover:text-black">Privacy</Link>
                    </div>
                </div>
            </Section>
        </footer>
    );
}
