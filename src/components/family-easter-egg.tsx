'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import CouplePicture from '@/assets/couple-easter-egg.jpg';
import FamilyPicture from '@/assets/family-easter-egg.jpg';
import ProfilePicture from '@/assets/profi-picture-laughing.jpg';

// Easter egg: hover (desktop) or tap (mobile) the avatar and two tilted polaroids
// spring out — me holding my son, and me with my girlfriend.
export function FamilyEasterEgg() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      // On touch, keep the photos up so they can be pinch-zoomed; they only
      // close by tapping the avatar again (which toggles `open` via onClick).
      if (event.pointerType === 'touch') return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open]);

  return (
    <button
      ref={ref}
      type="button"
      data-open={open}
      onClick={() => setOpen((value) => !value)}
      aria-label="Show photos of Fabian with his family"
      className="group relative h-[200px] w-[200px]"
    >
      <Image
        src={ProfilePicture}
        width={200}
        height={200}
        alt="Fabian Dietenberger portrait"
        className="rounded-full object-cover shadow-xl ring-1 ring-foreground/10 transition-transform duration-300 group-hover:-rotate-3 group-data-[open=true]:-rotate-3 dark:shadow-none dark:ring-white/10"
        priority
        placeholder="blur"
      />
      <div className="pointer-events-none absolute -top-12 -left-16 origin-bottom-right -rotate-6 scale-0 rounded-md bg-white p-2 pb-6 opacity-0 shadow-2xl ring-1 ring-black/5 transition-all delay-75 duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 group-data-[open=true]:scale-100 group-data-[open=true]:opacity-100 motion-reduce:transition-none dark:bg-zinc-100">
        <Image
          src={CouplePicture}
          width={112}
          height={112}
          alt="Fabian with his girlfriend at a café"
          className="h-28 w-28 rounded-sm object-cover"
          placeholder="blur"
        />
      </div>
      <div className="pointer-events-none absolute top-2 -right-16 origin-bottom-left rotate-6 scale-0 rounded-md bg-white p-2 pb-6 opacity-0 shadow-2xl ring-1 ring-black/5 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 group-data-[open=true]:scale-100 group-data-[open=true]:opacity-100 motion-reduce:transition-none dark:bg-zinc-100">
        <Image
          src={FamilyPicture}
          width={112}
          height={112}
          alt="Fabian holding his son by a lake"
          className="h-28 w-28 rounded-sm object-cover"
          placeholder="blur"
        />
      </div>
    </button>
  );
}
