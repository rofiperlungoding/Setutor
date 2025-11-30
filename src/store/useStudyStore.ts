import { create } from 'zustand';

export interface Document {
    id: string;
    title: string;
    type: 'pdf' | 'doc' | 'ppt';
    date: string;
}

export interface Subject {
    id: string;
    title: string;
    icon: string;
    progress: number;
    documents: Document[];
    lastStudied: string;
}

interface StudyState {
    subjects: Subject[];
    addSubject: (subject: Subject) => void;
}

export const useStudyStore = create<StudyState>((set) => ({
    subjects: [
        {
            id: '1',
            title: 'Calculus II',
            icon: '∫',
            progress: 65,
            lastStudied: '2h ago',
            documents: [
                { id: 'd1', title: 'Lecture 1: Integration', type: 'pdf', date: '2025-03-10' },
                { id: 'd2', title: 'Problem Set 3', type: 'doc', date: '2025-03-12' },
            ]
        },
        {
            id: '2',
            title: 'Art History',
            icon: '🎨',
            progress: 30,
            lastStudied: '1d ago',
            documents: [
                { id: 'd3', title: 'Renaissance Overview', type: 'ppt', date: '2025-03-08' },
            ]
        },
        {
            id: '3',
            title: 'Computer Science',
            icon: '💻',
            progress: 85,
            lastStudied: '5m ago',
            documents: [
                { id: 'd4', title: 'Data Structures', type: 'pdf', date: '2025-03-14' },
            ]
        }
    ],
    addSubject: (subject) => set((state) => ({ subjects: [...state.subjects, subject] })),
}));
