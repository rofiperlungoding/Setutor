import { Button } from '../ui/Button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Register() {
    return (
        <div className="min-h-screen flex bg-white">
            {/* Left Side - Gradient & Quote (Hidden on mobile) */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-brand-orange to-brand-yellow relative overflow-hidden p-12 flex-col justify-between text-white">
                <div className="relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                </div>

                <div className="relative z-10 max-w-lg">
                    <h2 className="text-5xl font-extrabold mb-6 leading-tight">
                        "The best way to <br /> predict the future <br /> is to create it."
                    </h2>
                    <p className="text-xl text-white/90">
                        Join the community of learners transforming their education with Setutor.
                    </p>
                </div>

                <div className="relative z-10 text-sm text-white/60">
                    © 2025 Setutor Inc.
                </div>

                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            {/* Right Side - Auth Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                            <div className="w-12 h-12 bg-brand-orange rounded-full mx-auto mb-4" />
                        </Link>
                        <h2 className="text-3xl font-bold">Create an account</h2>
                        <p className="text-gray-500 mt-2">Start your AI learning journey today.</p>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors font-medium shadow-sm">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                            Sign up with Google
                        </button>

                        <div className="relative flex items-center py-2">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">or</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Full Name</label>
                                <input type="text" className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl px-4 py-3 outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Email</label>
                                <input type="email" className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl px-4 py-3 outline-none transition-all" placeholder="student@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Password</label>
                                <input type="password" className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl px-4 py-3 outline-none transition-all" placeholder="Create a password" />
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <input type="checkbox" className="rounded border-gray-300 text-brand-orange focus:ring-brand-orange" />
                                <span>I agree to the <Link to="/terms" className="text-brand-orange hover:underline">Terms</Link> and <Link to="/privacy" className="text-brand-orange hover:underline">Privacy Policy</Link></span>
                            </div>

                            <Button className="w-full py-4 text-lg" onClick={(e) => { e.preventDefault(); window.location.href = '/app'; }}>
                                Create Account
                            </Button>
                        </form>

                        <p className="text-center text-sm text-gray-500">
                            Already have an account? <Link to="/login" className="text-brand-orange font-bold hover:underline">Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
