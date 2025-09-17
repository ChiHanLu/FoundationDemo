import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
}: CardProps) {
  const baseClasses = 'bg-white rounded-2xl shadow-lg overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2' : '';
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      <div className={paddingClasses[padding]}>
        {children}
      </div>
    </div>
  );
}