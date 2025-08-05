import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'glow';
}

const GlassCard = ({ className, variant = 'default', ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        'glass-card rounded-lg p-6',
        {
          'border-2': variant === 'bordered',
          'glow-accent': variant === 'glow',
        },
        className
      )}
      {...props}
    />
  );
};

export default GlassCard;