import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Mail, MapPin, Plus } from 'lucide-react';

export function Contact() {
    return (
        <div className="pt-20 bg-brand-gray min-h-screen">
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                        <h1 className="text-4xl font-extrabold mb-6">Get in touch.</h1>
                        <p className="text-xl text-gray-600 mb-10">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email us</p>
                                    <p className="font-bold">support@setutor.ai</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Visit us</p>
                                    <p className="font-bold">Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Accordion (Mock) */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg mb-4">Frequently Asked Questions</h3>
                            {[
                                "Is Setutor free to use?",
                                "Can I upload handwritten notes?",
                                "How accurate is the AI?"
                            ].map((q, i) => (
                                <div key={i} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                                    <span className="font-medium">{q}</span>
                                    <Plus size={16} className="text-gray-400" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-lg">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold ml-1">First Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl px-4 py-3 outline-none transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold ml-1">Last Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl px-4 py-3 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Email</label>
                                <input type="email" className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl px-4 py-3 outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold ml-1">Message</label>
                                <textarea className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-brand-orange rounded-xl px-4 py-3 outline-none transition-all h-32 resize-none" placeholder="How can we help?" />
                            </div>

                            <Button className="w-full py-4 text-lg">Send Message</Button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
