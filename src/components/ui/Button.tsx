import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-brand-dark text-white hover:bg-gray-800': variant === 'primary',
                        'bg-white text-brand-dark hover:bg-gray-100': variant === 'secondary',
                        'border-2 border-brand-dark text-brand-dark hover:bg-gray-50': variant === 'outline',
                        'text-brand-dark hover:bg-gray-100': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-8 text-base': size === 'md',
                        'h-14 px-10 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button, cn };
