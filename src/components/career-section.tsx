import { formatMonth } from '@/lib/format-month';

interface CareerEntry {
  title: string;
  company: string;
  descriptor?: string;
  start: string;
  end?: string;
}

interface CareerGroup {
  company: string;
  entries: CareerEntry[];
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

// Group consecutive roles at the same company (entries are sorted start desc,
// so the first entry in a group is the most recent). The group spans from the
// earliest role's start to the most recent role's end.
const groups: CareerGroup[] = sortedEntries.reduce<CareerGroup[]>(
  (acc, entry) => {
    const last = acc[acc.length - 1];
    if (last && last.company === entry.company) {
      last.entries.push(entry);
      last.start = entry.start;
    } else {
      acc.push({
        company: entry.company,
        entries: [entry],
        start: entry.start,
        end: entry.end,
      });
    }
    return acc;
  },
  [],
);

const mono = 'font-[family-name:var(--font-geist-mono)]';

function DateRange({ start, end }: { start: string; end?: string }) {
  return (
    <>
      <time dateTime={start}>{formatMonth(start)}</time>
      {' – '}
      {end ? <time dateTime={end}>{formatMonth(end)}</time> : 'present'}
    </>
  );
}

// Break a two-part company name after its "/" or "&" separator so the second
// organization sits on its own line (e.g. "SinnerSchrader / Accenture
// Interactive", "SAP SE & DHBW").
function CompanyName({ name }: { name: string }) {
  const match = name.match(/^(.*[/&])\s+(.*)$/);
  if (!match) {
    return name;
  }
  return (
    <>
      {match[1]}
      <br />
      {match[2]}
    </>
  );
}

export function CareerSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-center sm:text-4xl md:text-5xl">
          Career
        </h2>

        <ul className="mx-auto mt-12 max-w-3xl divide-y divide-border">
          {groups.map((group) => (
            <li
              key={`${group.company}-${group.start}`}
              className="grid gap-2 py-6 first:pt-0 last:pb-0 sm:grid-cols-[13rem_1fr] sm:gap-10"
            >
              <h3 className="self-start text-lg font-semibold">
                <CompanyName name={group.company} />
              </h3>
              <ol className="space-y-4">
                {group.entries.map((entry) => (
                  <li key={entry.start}>
                    <p className="font-medium">{entry.title}</p>
                    <p
                      className={`${mono} mt-0.5 text-sm text-muted-foreground`}
                    >
                      <DateRange start={entry.start} end={entry.end} />
                    </p>
                    {entry.descriptor ? (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {entry.descriptor}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
