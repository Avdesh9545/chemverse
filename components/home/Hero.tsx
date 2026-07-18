import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-violet-600 to-blue-600 text-white">

      {/* Background Glow */}
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1550px] gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

        {/* Left */}

        <div>

          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold tracking-wide backdrop-blur">
            🚀 India&apos;s Smart Chemistry Learning Platform
          </span>

          <h1 className="mt-10 text-6xl font-extrabold leading-[1.02] tracking-tight lg:text-[88px]">
            Master
            <span className="block text-cyan-300">
              Chemistry
            </span>
            with Confidence.
          </h1>

          <p className="mt-10 max-w-xl text-xl leading-9 text-violet-100">
            Learn CBSE Chemistry through beautifully written notes,
            interactive MCQs, PYQs, worksheets and concept videos —
            all in one place.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/class/9"
              className="rounded-2xl bg-white px-8 py-4 font-bold text-violet-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
            >
              Start Learning →
            </Link>

            <Link
              href="/class/9/chapter/matter-in-our-surroundings/mcqs"
              className="rounded-2xl border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              Try MCQs
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="relative flex items-center justify-end lg:-ml-16">

          {/* Glow */}
          <div className="absolute h-[720px] w-[720px] rounded-full bg-violet-500/20 blur-[150px]" />

          {/* Floating Particles */}
          <span className="particle particle-1"></span>
          <span className="particle particle-2"></span>
          <span className="particle particle-3"></span>
          <span className="particle particle-4"></span>
          <span className="particle particle-5"></span>

          <Image
            src="/images/hero/chemistry-hero.png"
            alt="ChemVerse Chemistry Illustration"
            width={1400}
            height={1100}
            priority
            className="
              hero-image
              relative
              z-10
              w-full
              max-w-[1000px]
              xl:max-w-[1200px]
              2xl:max-w-[1350px]
              h-auto
              drop-shadow-[0_45px_120px_rgba(120,90,255,0.6)]
            "
          />

        </div>

      </div>
    </section>
  );
}