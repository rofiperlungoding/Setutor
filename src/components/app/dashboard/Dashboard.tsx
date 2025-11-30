import { useStudyStore } from '../../../store/useStudyStore';
import { SubjectCard } from './SubjectCard';

export function Dashboard() {
    const { subjects } = useStudyStore();

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <header className="mb-10">
                <h1 className="text-3xl font-bold mb-2">Welcome back, Student! 👋</h1>
                <p className="text-gray-500">You have 3 upcoming exams this week.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} />
                ))}

                {/* Add New Card Placeholder */}
                <div className="border-2 border-dashed border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-brand-orange hover:text-brand-orange hover:bg-orange-50/50 transition-all cursor-pointer min-h-[240px]">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-white">
                        <span className="text-2xl">+</span>
                    </div>
                    <p className="font-medium">Add New Subject</p>
                </div>
            </div>
        </div>
    );
}
