import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-center px-6 pt-8 sm:justify-between sm:px-10">
        <Image
          src="/brand/logo-monogram.png"
          alt="Maison Leonis monogram"
          width={40}
          height={40}
          priority
          className="hidden sm:block"
        />
        <span className="font-display text-sm uppercase tracking-widest-plus text-ink/70">
          Est. 2026
        </span>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center">
        <Image
          src="/brand/logo-seal.png"
          alt="Maison Leonis seal"
          width={280}
          height={280}
          priority
          className="w-48 sm:w-60"
        />

        <div className="flex flex-col items-center gap-2">
          <div className="h-px w-16 bg-gold-muted/50" />
          <h1 className="font-display text-2xl uppercase tracking-widest-plus text-gold-muted sm:text-3xl">
            Maison Leonis
          </h1>
        </div>

        <div className="flex max-w-xl flex-col items-center gap-4">
          <p className="font-display text-xl italic text-gold-muted sm:text-2xl">
            A New House of Luxury
          </p>
          <h2 className="font-display text-3xl font-medium uppercase tracking-widest-plus text-ink sm:text-4xl">
            Launching Soon
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-ink/60 sm:text-base">
            The debut collection of Maison Leonis is in its final stages.
            Be among the first to experience it.
          </p>
        </div>
      </main>

      <footer className="flex flex-col items-center gap-3 px-6 pb-10 text-center">
        <Image
          src="/brand/logo-monogram.png"
          alt="Maison Leonis monogram"
          width={40}
          height={40}
        />
        <p className="text-[11px] uppercase tracking-widest-plus text-ink/40">
          &copy; {new Date().getFullYear()} Maison Leonis. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
