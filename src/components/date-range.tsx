import { formatMonth } from '@/lib/format-month';
import { cn } from '@/lib/utils';

interface DateRangeProps {
  start: string;
  end?: string;
  className?: string;
}

export function DateRange({ start, end, className }: DateRangeProps) {
  return (
    <p className={cn('font-mono text-sm text-muted-foreground', className)}>
      <time dateTime={start}>{formatMonth(start)}</time>
      {' – '}
      {end ? <time dateTime={end}>{formatMonth(end)}</time> : 'present'}
    </p>
  );
}
