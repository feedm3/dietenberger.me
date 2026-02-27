'use client';

import type { Activity } from 'react-activity-calendar';
import { ActivityCalendar } from 'react-activity-calendar';

interface GithubCalendarProps {
  data: Activity[];
}

function computeStats(data: Activity[]) {
  let totalContributions = 0;
  let activeDays = 0;

  for (const day of data) {
    totalContributions += day.count;
    if (day.count > 0) activeDays++;
  }

  return { totalContributions, activeDays };
}

export function GithubCalendar({ data }: GithubCalendarProps) {
  const { totalContributions, activeDays } = computeStats(data);

  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h3 className="text-base font-medium">GitHub Activity</h3>
        <a
          href="https://github.com/feedm3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          @feedm3
        </a>
      </div>

      <p className="text-sm text-muted-foreground">
        {totalContributions} contributions on {activeDays} days over the last
        year
      </p>

      <div className="overflow-x-auto [direction:rtl] md:[direction:ltr]">
        <div className="[direction:ltr] w-fit md:mx-auto">
          <ActivityCalendar
            data={data}
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            weekStart={1}
            showColorLegend={false}
            showTotalCount={false}
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              dark: ['#393e46', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            style={{ color: 'var(--color-muted-foreground)' }}
          />
        </div>
      </div>
    </div>
  );
}
