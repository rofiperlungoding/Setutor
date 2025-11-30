import { useParams } from 'react-router-dom';
import { useStudyStore } from '../../../store/useStudyStore';
import { MaterialList } from './MaterialList';
import { ChatInterface } from './ChatInterface';

export function StudyView() {
    const { id } = useParams();
    const { subjects } = useStudyStore();
    const subject = subjects.find((s) => s.id === id);

    if (!subject) {
        return <div className="p-8">Subject not found</div>;
    }

    return (
        <div className="flex h-full">
            {/* Left Panel: Materials */}
            <div className="w-80 border-r border-gray-200 bg-white h-full overflow-y-auto">
                <MaterialList subject={subject} />
            </div>

            {/* Right Panel: Chat */}
            <div className="flex-1 h-full bg-gray-50">
                <ChatInterface subject={subject} />
            </div>
        </div>
    );
}
