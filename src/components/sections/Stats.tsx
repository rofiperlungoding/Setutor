import { Section } from '../ui/Section';

export function Stats() {
    return (
        <Section className="bg-white">
            <div className="bg-gradient-to-br from-brand-orange to-brand-yellow rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden">
                {/* Background Blobs */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-black opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                <div className="relative z-10">
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        10,000+
                    </h2>
                    <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto">
                        Students are already acing their exams with Setutor.
                        <br />
                        Join the revolution today.
                    </p>
                </div>
            </div>
        </Section>
    );
}
