import { Section } from '../ui/Section';
import { Check } from 'lucide-react';

const capabilities = [
    'Lecture Notes', 'Textbooks', 'Research Papers', 'Case Studies',
    'Code Snippets', 'PowerPoint Slides', 'PDF Documents', 'Word Docs',
    'Handwritten Notes', 'Audio Transcripts', 'YouTube Summaries', 'Flashcards',
    'Mind Maps', 'Practice Exams'
];

export function Capabilities() {
    return (
        <Section className="relative overflow-hidden">
            {/* Top Blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-40 bg-gradient-to-b from-brand-yellow to-brand-orange rounded-full blur-2xl opacity-20" />

            <div className="relative z-10 text-center mb-16">
                {/* Icon Blob Placeholder */}
                <div className="mx-auto w-20 h-16 bg-gradient-to-r from-brand-yellow to-brand-orange rounded-full mb-6 flex items-center justify-center">
                    <div className="w-12 h-8 bg-white/20 rounded-full backdrop-blur-sm" />
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Everything you need.
                    <br />
                    All in one place.
                </h2>
                <p className="text-gray-600">
                    Support for all your study materials.
                </p>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-8">
                {capabilities.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-orange" strokeWidth={3} />
                        <span className="font-medium">{item}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
}
