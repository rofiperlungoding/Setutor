import { Section } from '../../ui/Section';

export function Privacy() {
    return (
        <div className="pt-20">
            <Section>
                <div className="max-w-3xl mx-auto prose prose-lg">
                    <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                    <p className="text-gray-600 mb-8">
                        Last updated: March 1, 2025
                    </p>

                    <h3 className="text-xl font-bold mb-4">1. Information We Collect</h3>
                    <p className="mb-6 text-gray-600">
                        We collect information you provide directly to us, such as when you create an account, upload documents, or communicate with us. This may include your name, email address, and study materials.
                    </p>

                    <h3 className="text-xl font-bold mb-4">2. How We Use Your Information</h3>
                    <p className="mb-6 text-gray-600">
                        We use the information we collect to provide, maintain, and improve our services, including to process your documents and generate AI responses.
                    </p>

                    <h3 className="text-xl font-bold mb-4">3. Data Security</h3>
                    <p className="mb-6 text-gray-600">
                        We implement appropriate technical and organizational measures to protect the security of your personal information.
                    </p>

                    <h3 className="text-xl font-bold mb-4">4. Document Privacy</h3>
                    <p className="mb-6 text-gray-600">
                        Your uploaded documents are private to your account. We do not share your study materials with third parties or other users unless explicitly authorized by you (e.g., in Team plans).
                    </p>
                </div>
            </Section>
        </div>
    );
}
