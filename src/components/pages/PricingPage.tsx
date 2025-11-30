import { Section } from '../ui/Section';
import { Pricing as PricingSection } from '../sections/Pricing';
import { Check, Minus, HelpCircle } from 'lucide-react';

export function PricingPage() {
    return (
        <div className="pt-20">
            {/* Reuse the existing Pricing Cards Section */}
            <PricingSection />

            {/* Detailed Feature Comparison Table */}
            <Section className="bg-brand-gray">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>

                    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                        <div className="grid grid-cols-4 p-6 border-b border-gray-100 bg-gray-50 font-bold">
                            <div className="text-gray-500">Feature</div>
                            <div className="text-center">Free</div>
                            <div className="text-center text-brand-orange">Pro</div>
                            <div className="text-center">Team</div>
                        </div>

                        {[
                            { name: "Document Uploads", free: "5/mo", pro: "Unlimited", team: "Unlimited" },
                            { name: "AI Chat Queries", free: "50/day", pro: "Unlimited", team: "Unlimited" },
                            { name: "Quiz Generation", free: "10/mo", pro: "Unlimited", team: "Unlimited" },
                            { name: "Audio Transcription", free: <Minus size={18} className="text-gray-300 mx-auto" />, pro: <Check size={18} className="text-green-500 mx-auto" />, team: <Check size={18} className="text-green-500 mx-auto" /> },
                            { name: "Study Schedule", free: <Check size={18} className="text-green-500 mx-auto" />, pro: <Check size={18} className="text-green-500 mx-auto" />, team: <Check size={18} className="text-green-500 mx-auto" /> },
                            { name: "Team Collaboration", free: <Minus size={18} className="text-gray-300 mx-auto" />, pro: <Minus size={18} className="text-gray-300 mx-auto" />, team: <Check size={18} className="text-green-500 mx-auto" /> },
                            { name: "Priority Support", free: <Minus size={18} className="text-gray-300 mx-auto" />, pro: <Check size={18} className="text-green-500 mx-auto" />, team: <Check size={18} className="text-green-500 mx-auto" /> },
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-4 p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors items-center">
                                <div className="font-medium text-sm">{row.name}</div>
                                <div className="text-center text-sm text-gray-600">{row.free}</div>
                                <div className="text-center text-sm font-bold">{row.pro}</div>
                                <div className="text-center text-sm text-gray-600">{row.team}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Pricing FAQ */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period." },
                            { q: "Do you offer student discounts?", a: "Our Pro plan is already discounted for students! However, we do offer additional discounts for bulk licenses for schools." },
                            { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex) and PayPal." },
                            { q: "Is there a free trial for Pro?", a: "Yes, we offer a 7-day free trial for the Pro plan so you can experience the full power of Setutor." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-orange transition-colors cursor-pointer">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <HelpCircle size={18} className="text-brand-orange" />
                                    {item.q}
                                </h3>
                                <p className="text-gray-600 ml-7">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
