import { formatMonth } from '@/lib/format-month';

interface CareerEntry {
  title: string;
  company: string;
  descriptor?: string;
  start: string;
  end?: string;
}

const entries: CareerEntry[] = [
  {
    title: 'Business Unit Director',
    company: 'Satellytes',
    descriptor: 'hands-on staff engineer',
    start: '2022-11',
  },
  {
    title: 'Engineering Manager',
    company: 'Satellytes',
    start: '2021-05',
    end: '2022-10',
  },
  {
    title: 'Senior Software Developer',
    company: 'Satellytes',
    start: '2020-01',
    end: '2021-05',
  },
  {
    title: 'Senior Software Developer',
    company: 'SinnerSchrader / Accenture Interactive',
    start: '2016-05',
    end: '2019-12',
  },
  {
    title: 'Software Developer',
    company: 'Ametras',
    start: '2014-10',
    end: '2016-04',
  },
  {
    title: 'Integrated Degree Program (B. Eng.)',
    company: 'SAP SE & DHBW',
    start: '2011-10',
    end: '2014-09',
  },
];

const sortedEntries = [...entries].sort((a, b) =>
  b.start.localeCompare(a.start),
);

function companyLabel(entry: CareerEntry): string {
  return entry.descriptor
    ? `${entry.company} · ${entry.descriptor}`
    : entry.company;
}

export function CareerSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-center sm:text-4xl md:text-5xl">
          Career
        </h2>

        <ol className="mx-auto mt-12 max-w-2xl divide-y divide-border">
          {sortedEntries.map((entry) => (
            <li
              key={`${entry.company}-${entry.start}`}
              className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <p className="shrink-0 text-xs tracking-wide text-muted-foreground uppercase tabular-nums sm:w-44">
                <time dateTime={entry.start}>{formatMonth(entry.start)}</time>
                {' – '}
                {entry.end ? (
                  <time dateTime={entry.end}>{formatMonth(entry.end)}</time>
                ) : (
                  'present'
                )}
              </p>
              <div>
                <h3 className="font-medium">{entry.title}</h3>
                <p className="text-muted-foreground">{companyLabel(entry)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
