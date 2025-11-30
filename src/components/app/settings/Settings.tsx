import { Button } from '../../ui/Button';
import { User, CreditCard, Bell } from 'lucide-react';

export function Settings() {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <header className="mb-10">
                <h1 className="text-3xl font-bold mb-2">Settings</h1>
                <p className="text-gray-500">Manage your account and preferences.</p>
            </header>

            <div className="space-y-8">
                {/* Profile Section */}
                <section className="bg-white rounded-3xl p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center">
                            <User size={20} />
                        </div>
                        <h2 className="text-xl font-bold">Profile</h2>
                    </div>

                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        </div>
                        <div>
                            <Button variant="outline" size="sm" className="mb-2">Change Avatar</Button>
                            <p className="text-xs text-gray-400">JPG, GIF or PNG. Max 1MB.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold ml-1">Full Name</label>
                            <input type="text" defaultValue="Student Name" className="w-full bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold ml-1">Email</label>
                            <input type="email" defaultValue="student@example.com" className="w-full bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand-orange/20" />
                        </div>
                    </div>
                </section>

                {/* Subscription Section */}
                <section className="bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center">
                                <CreditCard size={20} />
                            </div>
                            <h2 className="text-xl font-bold">Subscription</h2>
                        </div>

                        <div className="bg-black text-white rounded-2xl p-6 flex justify-between items-center">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Current Plan</p>
                                <p className="text-2xl font-bold">Free Plan</p>
                            </div>
                            <Button className="bg-white text-black hover:bg-gray-200">Upgrade to Pro</Button>
                        </div>
                    </div>

                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-yellow to-brand-orange opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </section>

                {/* Preferences Section */}
                <section className="bg-white rounded-3xl p-8 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center">
                            <Bell size={20} />
                        </div>
                        <h2 className="text-xl font-bold">Preferences</h2>
                    </div>

                    <div className="space-y-4">
                        {['Email Notifications', 'Study Reminders', 'Marketing Emails'].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50">
                                <span className="font-medium">{item}</span>
                                <div className="w-12 h-6 bg-brand-orange rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
