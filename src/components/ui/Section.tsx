import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';

const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn('py-16 md:py-24', className)}
                {...props}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </section>
        );
    }
);

Section.displayName = 'Section';

export { Section };
