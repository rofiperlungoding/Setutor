import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
    {
        name: 'Free',
        price: '$0',
        description: 'Perfect for getting started.',
        features: ['Upload up to 5 documents', 'Basic AI Chat', '10 Quiz generations/mo', 'Mobile Access'],
        cta: 'Start Free',
        popular: false,
    },
    {
        name: 'Pro',
        price: '$9',
        period: '/month',
        description: 'For serious students.',
        features: ['Unlimited documents', 'Advanced AI Models (GPT-4)', 'Unlimited Quizzes', 'Priority Support', 'Audio Transcriptions'],
        cta: 'Go Pro',
        popular: true,
    },
    {
        name: 'Team',
        price: '$19',
        period: '/month',
        description: 'For study groups.',
        features: ['Everything in Pro', 'Shared Knowledge Base', 'Collaborative Chat', 'Team Analytics'],
        cta: 'Create Team',
        popular: false,
    },
];

export function Pricing() {
    return (
        <Section id="pricing" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Simple, transparent pricing.
                </h2>
                <p className="text-gray-600">
                    Invest in your grades without breaking the bank.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan) => (
                    <div key={plan.name} className={`relative rounded-3xl p-8 flex flex-col ${plan.popular ? 'bg-black text-white shadow-xl scale-105 z-10' : 'bg-gray-50 text-gray-900'}`}>
                        {plan.popular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                                Most Popular
                            </div>
                        )}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                {plan.period && <span className="text-sm opacity-70">{plan.period}</span>}
                            </div>
                            <p className={`mt-4 text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm">
                                    <Check size={16} className={plan.popular ? 'text-brand-orange' : 'text-green-500'} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/onboarding" className="w-full">
                            <Button
                                className={`w-full ${plan.popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
                            >
                                {plan.cta}
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </Section>
    );
}
