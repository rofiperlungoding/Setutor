import { Section } from '../../ui/Section';

export function LegalNotice() {
    return (
        <div className="pt-20">
            <Section>
                <div className="max-w-3xl mx-auto prose prose-lg">
                    <h1 className="text-4xl font-bold mb-8">Legal Notice</h1>

                    <p className="text-gray-600 mb-8">
                        Last updated: March 1, 2025
                    </p>

                    <h3 className="text-xl font-bold mb-4">1. Company Information</h3>
                    <p className="mb-6 text-gray-600">
                        Setutor Inc.<br />
                        Jakarta, Indonesia<br />
                        Email: legal@setutor.ai
                    </p>

                    <h3 className="text-xl font-bold mb-4">2. Intellectual Property</h3>
                    <p className="mb-6 text-gray-600">
                        All content on this website, including text, graphics, logos, images, and software, is the property of Setutor Inc. or its content suppliers and is protected by international copyright laws.
                    </p>

                    <h3 className="text-xl font-bold mb-4">3. Disclaimer</h3>
                    <p className="mb-6 text-gray-600">
                        The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                    </p>
                </div>
            </Section>
        </div>
    );
}
