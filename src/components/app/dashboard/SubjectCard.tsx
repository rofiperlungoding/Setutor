import { ArrowRight, FileText, Clock } from 'lucide-react';
import { type Subject } from '../../../store/useStudyStore';

interface SubjectCardProps {
    subject: Subject;
}

export function SubjectCard({ subject }: SubjectCardProps) {
    return (
        <div className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-brand-orange/20 cursor-pointer relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl group-hover:bg-orange-50 transition-colors">
                    {subject.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <ArrowRight size={16} />
                </div>
            </div>

            <h3 className="text-xl font-bold mb-2">{subject.title}</h3>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                    <FileText size={14} />
                    <span>{subject.documents.length} docs</span>
                </div>
                <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{subject.lastStudied}</span>
                </div>
            </div>

            <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-orange to-brand-yellow"
                    style={{ width: `${subject.progress}%` }}
                />
            </div>
        </div>
    );
}
