import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white pt-20">
            <Section className="relative z-10 flex flex-col items-center text-center pt-20 pb-48">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gray-100 px-3 py-1">
                        <span className="text-sm font-medium">⚡ AI Study Companion</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl relative z-10">
                        Your personal <br />
                        <span className="relative inline-block">
                            <span className="relative z-10">AI Tutor.</span>
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-4 -z-10"
                                viewBox="0 0 100 10"
                                preserveAspectRatio="none"
                            >
                                <path d="M0 5 Q 50 15 100 5" stroke="#FF7F00" strokeWidth="8" fill="none" opacity="0.8" />
                            </svg>
                        </span>
                    </h1>
                    <p className="mb-10 max-w-2xl text-lg text-gray-600 sm:text-xl">
                        Upload your lectures. Chat with your notes. Ace your exams.
                        <br />
                        Organized knowledge, instant answers.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row justify-center">
                        <Link to="/onboarding">
                            <Button size="lg">Start Learning Now</Button>
                        </Link>
                        <Button size="lg" variant="outline">View Demo</Button>
                    </div>
                </motion.div>
            </Section>

            {/* Improved Orange Blobs/Hills */}
            <div className="absolute bottom-0 left-0 right-0 h-48 w-full overflow-hidden">
                <div className="relative w-full h-full flex items-end justify-center pb-8">
                    {/* Center Main Pill */}
                    <div className="w-[90%] md:w-[70%] h-[120px] bg-gradient-to-r from-brand-orange to-brand-yellow rounded-[3rem] absolute bottom-8 left-1/2 -translate-x-1/2 z-20 shadow-2xl shadow-brand-orange/40" />

                    {/* Left Pill (Decorative) */}
                    <div className="hidden md:block w-[20%] h-[80px] bg-gradient-to-r from-brand-orange/50 to-brand-yellow/50 rounded-[2rem] absolute bottom-12 left-[5%] z-10 blur-sm" />

                    {/* Right Pill (Decorative) */}
                    <div className="hidden md:block w-[20%] h-[80px] bg-gradient-to-r from-brand-orange/50 to-brand-yellow/50 rounded-[2rem] absolute bottom-12 right-[5%] z-10 blur-sm" />
                </div>
            </div>
        </div>
    );
}
