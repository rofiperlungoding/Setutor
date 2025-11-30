import { Section } from '../../ui/Section';

export function Terms() {
    return (
        <div className="pt-20">
            <Section>
                <div className="max-w-3xl mx-auto prose prose-lg">
                    <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

                    <p className="text-gray-600 mb-8">
                        Last updated: March 1, 2025
                    </p>

                    <h3 className="text-xl font-bold mb-4">1. Acceptance of Terms</h3>
                    <p className="mb-6 text-gray-600">
                        By accessing and using Setutor, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>

                    <h3 className="text-xl font-bold mb-4">2. Use License</h3>
                    <p className="mb-6 text-gray-600">
                        Permission is granted to temporarily download one copy of the materials (information or software) on Setutor's website for personal, non-commercial transitory viewing only.
                    </p>

                    <h3 className="text-xl font-bold mb-4">3. User Account</h3>
                    <p className="mb-6 text-gray-600">
                        To access certain features of the platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password.
                    </p>

                    <h3 className="text-xl font-bold mb-4">4. AI Usage Policy</h3>
                    <p className="mb-6 text-gray-600">
                        Our AI services are provided to assist learning. Users agree not to use the AI for generating harmful, illegal, or academic dishonesty-related content.
                    </p>
                </div>
            </Section>
        </div>
    );
}
