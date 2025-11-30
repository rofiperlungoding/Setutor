import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

export function Schedule() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dates = Array.from({ length: 35 }, (_, i) => i + 1); // Mock dates

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <header className="mb-10 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Your Study Plan</h1>
                    <p className="text-gray-500">Manage your exams and deadlines.</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeft /></button>
                    <span className="font-bold text-lg">March 2025</span>
                    <button className="p-2 hover:bg-gray-100 rounded-full"><ChevronRight /></button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calendar */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm">
                    <div className="grid grid-cols-7 mb-4 text-center text-gray-400 font-medium text-sm">
                        {days.map(d => <div key={d}>{d}</div>)}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                        {dates.map((date) => {
                            const isExam = date === 15;
                            const isToday = date === 10;
                            return (
                                <div
                                    key={date}
                                    className={`
                    aspect-square rounded-xl flex items-center justify-center text-sm font-medium cursor-pointer transition-all
                    ${isToday ? 'bg-black text-white' : 'hover:bg-gray-50'}
                    ${isExam ? 'bg-orange-50 text-brand-orange border border-brand-orange' : ''}
                  `}
                                >
                                    {date <= 31 ? date : ''}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Upcoming Deadlines */}
                <div className="bg-white rounded-3xl p-8 shadow-sm h-fit">
                    <h3 className="font-bold text-lg mb-6">Upcoming Deadlines</h3>
                    <div className="space-y-4">
                        {[
                            { title: "Calculus Midterm", date: "Mar 15", daysLeft: "5 days", urgent: true },
                            { title: "Art History Essay", date: "Mar 20", daysLeft: "10 days", urgent: false },
                            { title: "CS Project Demo", date: "Mar 25", daysLeft: "15 days", urgent: false },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-transparent hover:border-gray-200 transition-colors">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.urgent ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'}`}>
                                    <Clock size={20} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm">{item.title}</h4>
                                    <p className="text-xs text-gray-500">{item.date}</p>
                                </div>
                                {item.urgent && (
                                    <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full">Urgent</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
