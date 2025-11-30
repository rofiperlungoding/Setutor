import { Section } from '../ui/Section';


export function About() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <Section className="text-center pb-20">
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-orange-50 px-3 py-1">
                    <span className="text-sm font-medium text-brand-orange">Our Mission</span>
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6">
                    Empowering the next <br />
                    <span className="text-brand-orange">generation of learners.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                    We believe studying shouldn't be a struggle. Setutor transforms chaos into clarity with the power of AI.
                </p>
            </Section>

            {/* Values Grid */}
            <Section className="bg-brand-gray">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Student First", desc: "Every feature is designed to help you learn better, not just faster." },
                        { title: "AI Ethics", desc: "We prioritize accuracy and transparency in all our AI models." },
                        { title: "Continuous Learning", desc: "Just like you, our AI is always learning and improving." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow to-brand-orange rounded-2xl mb-6" />
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Team Section */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Meet the minds.</h2>
                    <p className="text-gray-600">Built by students, for students.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="text-center group">
                            <div className="w-full aspect-square bg-gray-100 rounded-3xl mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Team" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold">Team Member {i}</h3>
                            <p className="text-sm text-gray-500">Co-Founder</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
