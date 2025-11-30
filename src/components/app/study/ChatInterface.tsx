import { useState } from 'react';
import { Send, Paperclip, Sparkles } from 'lucide-react';
import { type Subject } from '../../../store/useStudyStore';
import { clsx } from 'clsx';

interface ChatInterfaceProps {
    subject: Subject;
}

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export function ChatInterface({ subject }: ChatInterfaceProps) {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'assistant', content: `Hello! I've analyzed the ${subject.documents.length} documents in ${subject.title}. What would you like to study today?` }
    ]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Mock AI Response
        setTimeout(() => {
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: `That's a great question about ${subject.title}. Based on "Lecture 1", the key concept here is...`
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-full relative">
            {/* Header */}
            <div className="h-16 border-b border-gray-200 bg-white/50 backdrop-blur-sm flex items-center px-6 justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">{subject.icon}</span>
                    <span className="font-bold">{subject.title}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Sparkles size={16} className="text-brand-orange" />
                    <span>AI Tutor Active</span>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((msg) => (
                    <div key={msg.id} className={clsx("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                        <div className={clsx(
                            "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                            msg.role === 'user'
                                ? "bg-black text-white rounded-tr-none"
                                : "bg-white text-gray-800 border border-brand-orange/30 rounded-tl-none"
                        )}>
                            {msg.content}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-gray-200">
                <div className="relative flex items-center">
                    <button className="absolute left-4 text-gray-400 hover:text-gray-600 transition-colors">
                        <Paperclip size={20} />
                    </button>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask anything about your notes..."
                        className="w-full bg-gray-100 rounded-full py-4 pl-12 pr-14 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all"
                    />
                    <button
                        onClick={handleSend}
                        className="absolute right-2 p-2 bg-brand-orange text-white rounded-full hover:bg-brand-orange/90 transition-colors shadow-md"
                    >
                        <Send size={18} />
                    </button>
                </div>
                <p className="text-center text-xs text-gray-400 mt-3">
                    AI can make mistakes. Always verify important information.
                </p>
            </div>
        </div>
    );
}
