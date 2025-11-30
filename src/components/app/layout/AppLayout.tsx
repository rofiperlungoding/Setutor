import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Settings, Plus } from 'lucide-react';
import { clsx } from 'clsx';

export function AppLayout() {
    const location = useLocation();

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/app' },
        { icon: Calendar, label: 'Schedule', path: '/app/schedule' },
        { icon: Settings, label: 'Settings', path: '/app/settings' },
    ];

    return (
        <div className="flex h-screen bg-brand-gray overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-white/80 backdrop-blur-md border-r border-gray-200 flex flex-col p-6">
                <Link to="/" className="flex items-center gap-2 mb-10 hover:opacity-80 transition-opacity">
                    <div className="h-8 w-8 rounded-full bg-brand-orange" />
                    <span className="text-xl font-bold tracking-tight">Setutor</span>
                </Link>

                <button className="w-full bg-gradient-to-r from-brand-orange to-brand-yellow text-white rounded-xl py-3 px-4 font-bold shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 transition-all flex items-center justify-center gap-2 mb-8">
                    <Plus size={20} />
                    New Subject
                </button>

                <nav className="flex-1 space-y-2">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={clsx(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors",
                                    isActive
                                        ? "bg-orange-50 text-brand-orange"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-black"
                                )}
                            >
                                <item.icon size={20} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Student</p>
                            <p className="text-xs text-gray-500">Free Plan</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
}
