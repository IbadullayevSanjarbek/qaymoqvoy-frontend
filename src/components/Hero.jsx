import { HERO_IMAGE } from '../data'

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl shadow-soft">
        <img src={HERO_IMAGE} alt="Tortlar, kruassanlar va qahva"
             className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]"
             onError={(e) => { e.currentTarget.style.display = 'none' }} />
        {/* Rasm yuklanmasa ham chiroyli fon ko'rinadi */}
        <div className="absolute inset-0 -z-0 bg-gradient-to-br from-choco to-mustard-dark" />
        <img src={HERO_IMAGE} alt="" aria-hidden="true"
             className="absolute inset-0 h-full w-full object-cover"
             onError={(e) => { e.currentTarget.style.display = 'none' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-choco/80 via-choco/45 to-choco/25" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Firesin bizning pishiriqlar
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
            Tortlar, kruassanlar va shirinliklar har kuni tongda yangi pishiriladi. Qahva bilan birga issiq va mazali.
          </p>
          <a href="#katalog"
             className="mt-8 rounded-full border-2 border-mustard bg-white px-8 py-3 font-bold text-choco shadow-soft transition-colors hover:bg-butter">
            Batafsil
          </a>
        </div>
      </div>
    </section>
  )
}
