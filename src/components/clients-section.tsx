import Link from 'next/link';
import type { ComponentType, SVGProps } from 'react';
import { AccentureLogo } from '@/assets/accenture-logo';
import { AdacMotorsportLogo } from '@/assets/adac-motorsport-logo';
import { AllianzLogo } from '@/assets/allianz-logo';
import { AudiLogo } from '@/assets/audi-logo';
import { BmwLogo } from '@/assets/bmw-logo';
import { FcBayernLogo } from '@/assets/fc-bayern-logo';
import { SapLogo } from '@/assets/sap-logo';
import { ZeissLogo } from '@/assets/zeiss-logo';

interface Client {
  name: string;
  href: string;
  title: string;
  Logo: ComponentType<SVGProps<SVGSVGElement>>;
}

const clients: Client[] = [
  {
    name: 'Audi',
    href: 'https://audi.de',
    title: "Visit Audi's website",
    Logo: AudiLogo,
  },
  {
    name: 'FC Bayern Munich',
    href: 'https://fcbayern.com',
    title: "Visit FC Bayern Munich's website",
    Logo: FcBayernLogo,
  },
  {
    name: 'ZEISS',
    href: 'https://zeiss.de',
    title: "Visit ZEISS's website",
    Logo: ZeissLogo,
  },
  {
    name: 'Allianz',
    href: 'https://allianz.de',
    title: "Visit Allianz's website",
    Logo: AllianzLogo,
  },
  {
    name: 'SAP',
    href: 'https://sap.com',
    title: "Visit SAP's website",
    Logo: SapLogo,
  },
  {
    name: 'BMW',
    href: 'https://bmw.de',
    title: "Visit BMW's website",
    Logo: BmwLogo,
  },
  {
    name: 'Accenture',
    href: 'https://accenture.com',
    title: "Visit Accenture's website",
    Logo: AccentureLogo,
  },
  {
    name: 'ADAC Motorsport',
    href: 'https://adac-motorsport.de',
    title: "Visit ADAC Motorsport's website",
    Logo: AdacMotorsportLogo,
  },
];

export function ClientsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-center sm:text-4xl md:text-5xl">
          Clients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12 mt-12 items-center justify-center">
          {clients.map(({ name, href, title, Logo }) => (
            <Link
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              className="block rounded-md opacity-80 transition-opacity hover:opacity-100"
            >
              <Logo className="p-2 w-full" aria-hidden="true" />
              <span className="sr-only">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
