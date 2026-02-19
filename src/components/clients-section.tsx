import Link from 'next/link';
import { AccentureLogo } from '@/assets/accenture-logo';
import { AdacMotorsportLogo } from '@/assets/adac-motorsport-logo';
import { AllianzLogo } from '@/assets/allianz-logo';
import { AudiLogo } from '@/assets/audi-logo';
import { BmwLogo } from '@/assets/bmw-logo';
import { FcBayernLogo } from '@/assets/fc-bayern-logo';
import { SapLogo } from '@/assets/sap-logo';
import { ZeissLogo } from '@/assets/zeiss-logo';

export function ClientsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
          Clients I&apos;ve Worked With
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12 mt-12 items-center justify-center">
          <Link
            href="https://audi.de"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Audi's website"
          >
            <AudiLogo className="p-2 w-full" aria-hidden="true" />
            <span className="sr-only">Audi</span>
          </Link>
          <Link
            href="https://fcbayern.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit FC Bayern Munich's website"
          >
            <FcBayernLogo className="p-2 w-full" aria-hidden="true" />
            <span className="sr-only">FC Bayern Munich</span>
          </Link>
          <Link
            href="https://zeiss.de"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit ZEISS's website"
          >
            <ZeissLogo className="p-2 w-full" aria-hidden="true" />
            <span className="sr-only">ZEISS</span>
          </Link>
          <Link
            href="https://allianz.de"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Allianz's website"
          >
            <AllianzLogo className="p-2 w-full" aria-hidden="true" />
            <span className="sr-only">Allianz</span>
          </Link>
          <Link
            href="https://sap.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit SAP's website"
          >
            <SapLogo className="p-2 w-full" aria-hidden="true" />
            <span className="sr-only">SAP</span>
          </Link>
          <Link
            href="https://bmw.de"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit BMW's website"
          >
            <BmwLogo className="p-2 w-full" aria-hidden="true" />
            <span className="sr-only">BMW</span>
          </Link>
          <Link
            href="https://accenture.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Accenture's website"
          >
            <AccentureLogo className="p-2 w-full" aria-hidden="true" />
            <span className="sr-only">Accenture</span>
          </Link>
          <Link
            href="https://adac-motorsport.de"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit ADAC Motorsport's website"
          >
            <AdacMotorsportLogo className="p-2 w-full" aria-hidden="true" />
            <span className="sr-only">ADAC Motorsport</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
