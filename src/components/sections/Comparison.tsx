import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export function Comparison() {
    return (
        <Section className="bg-brand-gray">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    How can you grow?
                </h2>
                <p className="text-gray-600">
                    Don't let design slow down your growth.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Card 1: The Old Way */}
                <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between min-h-[400px]">
                    <div>
                        <div className="w-12 h-12 bg-gray-100 rounded-full mb-6 flex items-center justify-center text-2xl">
                            😫
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                            The Old Way...
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Messy folders, endless Ctrl+F, confusion.
                            Spending more time finding information than actually learning it.
                            Stress before every exam.
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 mb-2">Result</p>
                        <p className="text-3xl font-bold">Burnout & Stress</p>
                    </div>
                </div>

                {/* Card 2: Setutor */}
                <div className="bg-black text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between min-h-[400px] relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="text-sm font-medium text-brand-orange mb-2">RESULTS</div>
                        <h3 className="text-5xl font-bold mb-4">
                            A+ Grades
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Instant answers, structured knowledge, and personalized quizzes.
                            Study smarter, finish faster.
                        </p>
                    </div>
                    <div className="relative z-10">
                        <Link to="/onboarding">
                            <Button className="w-full bg-white text-black hover:bg-gray-200">
                                Start Studying
                            </Button>
                        </Link>
                    </div>

                    {/* Background Gradient */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange rounded-full blur-[100px] opacity-20" />
                </div>
            </div>
        </Section>
    );
}
