import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Upload, Brain, MessageSquare, Rocket, ArrowRight, ArrowLeft } from 'lucide-react';

export function Onboarding() {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);

    const steps = [
        {
            id: 'welcome',
            icon: BookOpen,
            title: "Welcome to Setutor",
            description: "Your personal AI study companion. Experience a smarter way to learn.",
            visual: (
                <div className="relative w-48 h-48 flex items-center justify-center">
                    <div className="absolute inset-0 bg-brand-orange/10 rounded-full blur-2xl" />
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-gray-100"
                    >
                        <div className="w-16 h-16 bg-gradient-to-tr from-brand-orange to-brand-yellow rounded-xl" />
                    </motion.div>
                </div>
            )
        },
        {
            id: 'upload',
            icon: Upload,
            title: "Centralize Knowledge",
            description: "Upload lectures, PDFs, and notes. We organize everything in one place.",
            visual: (
                <div className="relative w-48 h-48 flex items-center justify-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="w-32 h-40 bg-white border border-gray-100 rounded-xl shadow-lg flex flex-col items-center justify-center gap-2"
                    >
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                            <Upload className="text-brand-orange" size={24} />
                        </div>
                        <div className="h-2 w-16 bg-gray-100 rounded-full" />
                        <div className="h-2 w-10 bg-gray-100 rounded-full" />
                    </motion.div>
                </div>
            )
        },
        {
            id: 'analyze',
            icon: Brain,
            title: "AI Analysis",
            description: "Instantly extract key concepts and summaries from your materials.",
            visual: (
                <div className="relative w-48 h-48 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map(i => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="w-14 h-14 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center justify-center"
                            >
                                <Brain className="text-brand-orange opacity-80" size={20} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'chat',
            icon: MessageSquare,
            title: "Interactive Chat",
            description: "Ask questions and get instant answers directly from your notes.",
            visual: (
                <div className="relative w-48 h-48 flex flex-col items-center justify-center gap-3">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="self-start bg-gray-100 px-4 py-2 rounded-2xl rounded-tl-none text-xs text-gray-600 shadow-sm"
                    >
                        Explain this concept?
                    </motion.div>
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="self-end bg-brand-orange px-4 py-2 rounded-2xl rounded-tr-none text-xs text-white shadow-md"
                    >
                        Here is the summary...
                    </motion.div>
                </div>
            )
        },
        {
            id: 'start',
            icon: Rocket,
            title: "Ready to Launch?",
            description: "Join thousands of students studying smarter. Let's get started.",
            visual: (
                <div className="relative w-48 h-48 flex items-center justify-center">
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-24 h-24 bg-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/30">
                            <Rocket size={40} className="text-white" />
                        </div>
                    </motion.div>
                </div>
            )
        }
    ];

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
        } else {
            navigate('/login');
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl" />
            </div>

            {/* Main Card */}
            <div className="relative z-10 w-full max-w-md mx-auto text-center">
                {/* Logo */}
                <Link to="/" className="flex items-center justify-center gap-2 mb-12 hover:opacity-80 transition-opacity">
                    <div className="h-8 w-8 rounded-full bg-brand-orange" />
                    <span className="font-bold text-xl tracking-tight text-black">Setutor</span>
                </Link>

                {/* Visual Area */}
                <div className="h-64 flex items-center justify-center mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            {steps[step].visual}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Text Content */}
                <div className="mb-12 min-h-[120px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <h1 className="text-3xl font-bold mb-4 text-black">{steps[step].title}</h1>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-xs mx-auto">
                                {steps[step].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mb-12">
                    {steps.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-brand-orange' : 'w-2 bg-gray-200'}`}
                        />
                    ))}
                </div>

                {/* Controls */}
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-4 w-full">
                        <button
                            onClick={handleBack}
                            disabled={step === 0}
                            className={`p-4 rounded-full hover:bg-gray-50 transition-colors ${step === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 text-gray-400'}`}
                        >
                            <ArrowLeft size={24} />
                        </button>

                        <button
                            onClick={handleNext}
                            className="flex-1 h-14 bg-black text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            {step === steps.length - 1 ? 'Get Started' : 'Next'}
                            <ArrowRight size={20} />
                        </button>

                        <div className="w-[56px]" /> {/* Spacer for symmetry */}
                    </div>

                    <button
                        onClick={() => navigate('/login')}
                        className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        Skip to Login
                    </button>
                </div>
            </div>
        </div>
    );
}
