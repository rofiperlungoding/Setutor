import { Section } from '../ui/Section';
import { Folder, Bot, Zap } from 'lucide-react';

const features = [
    {
        title: 'Knowledge Base',
        description: 'Organize unorganized sources. Upload PDFs, PPTs, and Notes into structured subjects.',
        icon: 'bg-brand-yellow',
        lucideIcon: Folder,
    },
    {
        title: 'Contextual AI',
        description: 'Ask questions based specifically on your materials. No hallucinations, just facts.',
        icon: 'bg-brand-orange',
        lucideIcon: Bot,
    },
    {
        title: 'Exam Prep',
        description: 'Generate summaries and quizzes instantly to test your knowledge.',
        icon: 'bg-gradient-to-br from-brand-orange to-brand-yellow',
        lucideIcon: Zap,
    },
];

export function Features() {
    return (
        <Section className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Study smarter,
                    <br />
                    not harder.
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Stop drowning in messy notes.
                    <br />
                    Let AI organize and explain everything for you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className={`w-12 h-16 rounded-xl mb-6 ${feature.icon} shadow-lg flex items-center justify-center`}>
                            <feature.lucideIcon className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
