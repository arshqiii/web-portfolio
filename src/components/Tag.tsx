import type { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const tagVariants = cva(
  'inline-flex items-center justify-center rounded-full border text-text-primary font-bold',
  {
    variants: {
      variant: {
        default: 'bg-action-tertiary border-action-border',
      },
      size: {
        sm: 'h-6 px-3 text-xs',
        md: 'h-8 px-4 text-sm',
        lg: 'h-10 px-5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface TagProps
  extends HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof tagVariants> { }

export function Tag({ className, variant, size, children, ...props }: TagProps) {
  return (
    <div className={cn(tagVariants({ variant, size, className }))} {...props}>
      {children}
    </div>
  );
}
