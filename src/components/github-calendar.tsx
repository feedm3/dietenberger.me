'use client';

import type { Activity } from 'react-activity-calendar';
import { ActivityCalendar } from 'react-activity-calendar';

interface GithubCalendarProps {
  data: Activity[];
}

export function GithubCalendar({ data }: GithubCalendarProps) {
  return (
    <div className="overflow-x-auto [direction:rtl]">
      <div className="[direction:ltr] w-fit mx-auto">
        <ActivityCalendar
          data={data}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          weekStart={1}
          labels={{ totalCount: '{{count}} contributions in the last year' }}
          theme={{
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
            dark: ['#393e46', '#0e4429', '#006d32', '#26a641', '#39d353'],
          }}
        />
      </div>
    </div>
  );
}
