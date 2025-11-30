import { Plus, FileText, File, Presentation } from 'lucide-react';
import { type Subject } from '../../../store/useStudyStore';

interface MaterialListProps {
    subject: Subject;
}

export function MaterialList({ subject }: MaterialListProps) {
    const getIcon = (type: string) => {
        switch (type) {
            case 'pdf': return <FileText size={18} className="text-red-500" />;
            case 'ppt': return <Presentation size={18} className="text-orange-500" />;
            default: return <File size={18} className="text-blue-500" />;
        }
    };

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg">Knowledge Base</h2>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-brand-orange">
                    <Plus size={20} />
                </button>
            </div>

            <div className="space-y-3">
                {subject.documents.map((doc) => (
                    <div key={doc.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors border border-transparent hover:border-gray-200 group">
                        <div className="mt-1">{getIcon(doc.type)}</div>
                        <div>
                            <p className="font-medium text-sm text-gray-900 group-hover:text-brand-orange transition-colors">{doc.title}</p>
                            <p className="text-xs text-gray-400">{doc.date}</p>
                        </div>
                    </div>
                ))}

                <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 text-sm font-medium hover:border-brand-orange hover:text-brand-orange hover:bg-orange-50/50 transition-all flex items-center justify-center gap-2 mt-4">
                    <Plus size={16} />
                    Add Material
                </button>
            </div>
        </div>
    );
}
