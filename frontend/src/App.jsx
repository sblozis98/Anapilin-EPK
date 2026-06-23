import { useState, useEffect, useRef, useCallback } from 'react';
import logo from '../photos/logo (2).png';
import carousel1 from '../photos/carousel 1.jpg';
import carousel2 from '../photos/carousel 2.jpg';
import carousel3 from '../photos/carousel 3.jpg';
import carousel4 from '../photos/carousel 4.jpg';
import carousel5 from '../photos/carousel 5.jpg';
import carousel6 from '../photos/carousel 6.jpg';
import bandPhoto from '../photos/band photo (2).jpg';
import aurimas from './assets/band members/Aurimas Krivinskas.jpg';
import sandzejus from './assets/band members/Sandžėjus Sankaras.jpg';
import simonas from './assets/band members/Simonas Bložis.jpg';
import tauras from './assets/band members/Tauras Jasionis.jpg';

/* ------------------------------------------------------------------ */
/*  Bilingual content                                                  */
/* ------------------------------------------------------------------ */

const socials = [
  { name: 'Bandcamp', url: 'https://anapilin.bandcamp.com/' },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/6GzFvNkfrjnSQZMfNcLJZO' },
  { name: 'YouTube', url: 'https://www.youtube.com/@anapilinofficial' },
  { name: 'Instagram', url: 'https://www.instagram.com/anapilinofficial/' },
  { name: 'Facebook', url: 'https://www.facebook.com/anapilinofficial/' },
];

const content = {
  en: {
    nav: { bio: 'Bio', music: 'Music', live: 'Live', members: 'Members', discography: 'Discography', press: 'Press' },
    heroTag: 'Black Metal · Kaunas, Lithuania · Est. 2016',
    heroCtaListen: 'Listen',
    heroCtaPress: 'Press Kit',
    genre: 'Black Metal',
    origin: 'Kaunas, Lithuania',
    formed: '2016',
    contact: 'anapilinofficial@gmail.com',
    bioTitle: 'The Band',
    bio: `Anapilin is a black metal band exploring the existential, spiritual, and mystical aspects of life and death. Their music is built on atmospheric, cold soundscapes, captivating guitar riffs, and profound, poetic lyrics — inviting the listener on a journey between light and darkness, life and eternity.`,
    factsTitle: 'Facts',
    facts: [
      { k: 'Genre', v: 'Black Metal' },
      { k: 'Origin', v: 'Kaunas, Lithuania' },
      { k: 'Formed', v: '2016' },
      { k: 'For', v: 'Fans of cold, atmospheric black metal' },
    ],
    musicTitle: 'Music',
    musicLead: 'Featured release, live footage, and a track to lose yourself in.',
    videoMainTitle: 'Official Video',
    videoLiveTitle: 'Live',
    listenTitle: 'Featured Track — “Pabaiga”',
    videoMain: 'https://www.youtube.com/embed/hzY57sFluS8',
    videoLive: 'https://www.youtube.com/embed/Uqqmwaj7i64?start=317',
    liveTitle: 'Live',
    liveLead: 'Selected stages and shared bills.',
    performances: [
      { year: '2025', title: "Velniava'2025", desc: 'Shared the stage with God Dethroned, Night Slasher, and Black Spikes at Pramogų salė Vakaris, Vilnius — March 29, 2025.' },
      { year: '2025', title: 'Howls of Winter XII', desc: 'Underground black metal festival at Rockclub Tapper, Tallinn, Estonia — with Abduction, izrod, Lunar Mantra, and Sargeist.' },
      { year: '2024', title: 'Zobens un Lēmes', desc: 'Prestigious metal festival in Bauska, Latvia — alongside Samael, Thyrfing, and Metsatöll.' },
      { year: '2023', title: 'Akhlys', desc: 'Performed with US band Akhlys at nArauti club, Vilnius — December 3, 2023.' },
      { year: '2020', title: 'Misþyrming', desc: 'Performed with Icelandic band Misþyrming at Narauti club, Vilnius — March 10, 2020.' },
    ],
    historyTitle: 'History',
    history: `Anapilin is a black metal band from Kaunas, Lithuania, formed in 2016 by Sandžejus and Simonas, who hailed from different cities. The lineup was solidified after meeting additional members at a local metal concert in Kaunas — which has since become their base of operations.<br/><br/>
Initially the band experimented with various genres, but their focus remained on black metal. Their early work culminated in the debut EP, <em>Krachas</em>, in 2019. This was followed by their first full-length, <em>Dezintegracija</em>, on June 20, 2021 — recorded during the COVID-19 quarantine, with each member contributing their parts from home.<br/><br/>
Following internal changes, including a new drummer and bassist, Anapilin solidified its lineup with Tauras on drums and Aurimas on bass. This stable formation led to several singles and a self-titled EP in late 2024. The band's sound is defined by its atmospheric coldness, engaging riffs, and deep, poetic lyrics on the existential, spiritual, and mystical sides of life and death.<br/><br/>
Anapilin remains an active presence in the Lithuanian metal scene and is currently working on its next full-length, delving further into themes of human downfall, psychological collapse, and a crumbling environment.`,
    membersTitle: 'Members',
    discographyTitle: 'Discography',
    discography: [
      { name: 'Monotonija', type: 'Single', year: 2025 },
      { name: 'Anapilin', type: 'EP', year: 2024 },
      { name: 'Applause in an Empty Theater', type: 'Single', year: 2024 },
      { name: 'Breaking the Fourth Wall', type: 'Single', year: 2024 },
      { name: 'Tuščia erdvė', type: 'Single', year: 2023 },
      { name: 'Pabaiga', type: 'Single', year: 2022 },
      { name: 'Dezintegracija', type: 'Full-length', year: 2021 },
      { name: 'Neganda', type: 'Single', year: 2020 },
      { name: 'Urvas', type: 'Demo', year: 2020 },
      { name: 'Krachas', type: 'EP', year: 2019 },
    ],
    pressTitle: 'Press Kit',
    pressLead: 'Everything a promoter, label, or journalist needs.',
    downloads: [
      { label: 'EPK — English', href: '/Anapilin-EPK-en.pdf' },
      { label: 'EPK — Lietuvių', href: '/Anapilin-EPK-lt.pdf' },
      { label: 'Technical Rider', href: '/assets/rider/rider.pdf' },
    ],
    contactTitle: 'Contact',
    contactLead: 'Booking, press, and everything else:',
    rights: 'All rights reserved.',
  },
  lt: {
    nav: { bio: 'Apie', music: 'Muzika', live: 'Koncertai', members: 'Nariai', discography: 'Diskografija', press: 'Spaudai' },
    heroTag: 'Juodasis metalas · Kaunas, Lietuva · Nuo 2016',
    heroCtaListen: 'Klausytis',
    heroCtaPress: 'Spaudos rinkinys',
    genre: 'Juodasis metalas',
    origin: 'Kaunas, Lietuva',
    formed: '2016',
    contact: 'anapilinofficial@gmail.com',
    bioTitle: 'Grupė',
    bio: `„Anapilin“ – juodojo metalo grupė, tyrinėjanti egzistencinius, dvasinius ir mistinius gyvenimo bei mirties aspektus. Kūryba remiasi atmosferišku, šaltu skambesiu, įtraukiančiais gitarų rifais ir giliais, poetiškais tekstais – kviečia klausytoją į kelionę tarp šviesos ir tamsos, gyvenimo ir amžinybės.`,
    factsTitle: 'Faktai',
    facts: [
      { k: 'Žanras', v: 'Juodasis metalas' },
      { k: 'Kilmė', v: 'Kaunas, Lietuva' },
      { k: 'Įkurta', v: '2016' },
      { k: 'Kam', v: 'Šalto, atmosferiško juodojo metalo gerbėjams' },
    ],
    musicTitle: 'Muzika',
    musicLead: 'Naujausias leidinys, koncertinė medžiaga ir kūrinys pasinerti.',
    videoMainTitle: 'Oficialus vaizdo klipas',
    videoLiveTitle: 'Gyvai',
    listenTitle: 'Kūrinys — „Pabaiga“',
    videoMain: 'https://www.youtube.com/embed/hzY57sFluS8',
    videoLive: 'https://www.youtube.com/embed/Uqqmwaj7i64?start=317',
    liveTitle: 'Koncertai',
    liveLead: 'Išskirtinės scenos ir bendri pasirodymai.',
    performances: [
      { year: '2025', title: "Velniava'2025", desc: 'Pasirodymas Vilniuje kartu su God Dethroned, Night Slasher ir Black Spikes – Pramogų salė „Vakaris“.' },
      { year: '2025', title: 'Howls of Winter XII', desc: 'Underground juodojo metalo festivalis Taline, Estijoje – su Abduction, izrod, Lunar Mantra ir Sargeist.' },
      { year: '2024', title: 'Zobens un Lēmes', desc: 'Prestižinis metalo festivalis Bauskėje, Latvijoje – kartu su Samael, Thyrfing ir Metsatöll.' },
      { year: '2023', title: 'Akhlys', desc: 'Pasirodymas su amerikiečių grupe Akhlys Vilniaus klube „nArauti“ – 2023 m. gruodžio 3 d.' },
      { year: '2020', title: 'Misþyrming', desc: 'Pasirodymas su islandų grupe Misþyrming Vilniaus klube „Narauti“ – 2020 m. kovo 10 d.' },
    ],
    historyTitle: 'Istorija',
    history: `„Anapilin“ – juodojo metalo grupė iš Kauno, susikūrusi 2016 metais. Grupės pradžią davė du nariai – Sandžejus ir Simonas, kilę iš skirtingų miestų. Kiek vėliau likę nariai buvo surasti vietiniame metalo koncerte Kaune, o nuo to laiko visa grupės veikla persikėlė į Kauną.<br/><br/>
Pradžioje grupė eksperimentavo su įvairiais žanrais, tačiau pagrindinis dėmesys visada buvo skiriamas juodajam metalui. Ankstyvoji kūryba kulminavo pirmojo EP <em>„Krachas“</em> išleidimu 2019 metais. Tai buvo pirmasis žingsnis link sėkmės – grupė pradėjo aktyviai koncertuoti.<br/><br/>
Pasikeitus bosistui, karantino metu buvo išleistas pirmasis pilno metro albumas <em>„Dezintegracija“</em>. Kadangi įrašai vyko per pandemiją, kiekvienas narys partijas įrašinėjo namuose, todėl leidybos procesas buvo sudėtingas.<br/><br/>
Vėliau, dėl vidinių nesutarimų, pasikeitė ir būgnininkas – jį pakeitė dabartinis narys Tauras, o bosine gitara pradėjo groti Aurimas. Nuo tada grupės sudėtis tapo stabili kaip niekada. Su naująja sudėtimi išleista keletas singlų bei EP „Anapilin“, o šiuo metu grupė intensyviai dirba prie naujo LP albumo.`,
    membersTitle: 'Nariai',
    discographyTitle: 'Diskografija',
    discography: [
      { name: 'Monotonija', type: 'Singlas', year: 2025 },
      { name: 'Anapilin', type: 'EP', year: 2024 },
      { name: 'Applause in an Empty Theater', type: 'Singlas', year: 2024 },
      { name: 'Breaking the Fourth Wall', type: 'Singlas', year: 2024 },
      { name: 'Tuščia erdvė', type: 'Singlas', year: 2023 },
      { name: 'Pabaiga', type: 'Singlas', year: 2022 },
      { name: 'Dezintegracija', type: 'Pilnas albumas', year: 2021 },
      { name: 'Neganda', type: 'Singlas', year: 2020 },
      { name: 'Urvas', type: 'Demo', year: 2020 },
      { name: 'Krachas', type: 'EP', year: 2019 },
    ],
    pressTitle: 'Spaudos rinkinys',
    pressLead: 'Viskas, ko reikia organizatoriui, leidyklai ar žurnalistui.',
    downloads: [
      { label: 'EPK — English', href: '/Anapilin-EPK-en.pdf' },
      { label: 'EPK — Lietuvių', href: '/Anapilin-EPK-lt.pdf' },
      { label: 'Techninis rideris', href: '/assets/rider/rider.pdf' },
    ],
    contactTitle: 'Kontaktai',
    contactLead: 'Koncertai, spauda ir visa kita:',
    rights: 'Visos teisės saugomos.',
  },
};

const members = [
  {
    name: 'Sandžėjus Sankaras', role: { en: 'Lead Guitars', lt: 'Pagrindinė gitara' }, years: '2016', photo: sandzejus,
    bio: { en: 'One of the band’s founders, shaping its melodic and atmospheric sound with his creative vision.', lt: 'Vienas iš grupės įkūrėjų, kurio kūrybinė vizija formuoja melodingą ir atmosferinį skambesį.' },
  },
  {
    name: 'Simonas Bložis', role: { en: 'Vocals · Rhythm Guitar', lt: 'Vokalas · Ritminė gitara' }, years: '2016', photo: simonas,
    bio: { en: 'Haunting vocals and solid rhythm guitar, contributing poetic lyrics and emotional depth.', lt: 'Užburiantys vokalai ir tvirta ritmo gitara; poetiški tekstai ir emocinis gylis.' },
  },
  {
    name: 'Aurimas Krivinskas', role: { en: 'Bass', lt: 'Bosinė gitara' }, years: '2023', photo: aurimas,
    bio: { en: 'Joined in 2023, providing a powerful low-end and a dynamic stage presence.', lt: 'Prisijungė 2023 m. – galingas bosas ir dinamiškas sceninis įvaizdis.' },
  },
  {
    name: 'Tauras Jasionis', role: { en: 'Drums', lt: 'Būgnai' }, years: '2023', photo: tauras,
    bio: { en: 'Drumming that brings intensity and precision, driving the band’s rhythmic backbone.', lt: 'Intensyvus ir preciziškas būgnavimas, palaikantis grupės ritminį pagrindą.' },
  },
];

const carouselImages = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6];

/* ------------------------------------------------------------------ */
/*  Reusable bits                                                      */
/* ------------------------------------------------------------------ */

function Reveal({ children, className = '', as: Tag = 'div', style, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${className}`} style={style} {...rest}>{children}</Tag>;
}

function SectionHeading({ index, children }) {
  return (
    <div className="flex items-end gap-4 mb-10">
      <span className="font-display text-[var(--blood-bright)] text-sm tracking-wide-sm pb-1">{index}</span>
      <h2 className="font-display uppercase text-3xl md:text-5xl font-600 tracking-wide-sm leading-none">{children}</h2>
      <span className="flex-1 h-px bg-[var(--line)] mb-2" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  const [lang, setLang] = useState('en');
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [activeMember, setActiveMember] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const next = useCallback(() => setCarouselIdx((p) => (p + 1) % carouselImages.length), []);
  const prev = () => setCarouselIdx((p) => (p - 1 + carouselImages.length) % carouselImages.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const navLinks = [
    ['#bio', t.nav.bio], ['#music', t.nav.music], ['#live', t.nav.live],
    ['#members', t.nav.members], ['#discography', t.nav.discography], ['#press', t.nav.press],
  ];

  return (
    <div className="grain relative">
      {/* ---------------- NAV ---------------- */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[var(--bg)]/90 backdrop-blur border-b border-[var(--line)] py-3' : 'py-5'}`}>
        <nav className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          <a href="#top" className="font-display uppercase tracking-mega text-sm font-600">Anapilin</a>
          <div className="hidden md:flex items-center gap-7 font-display uppercase text-xs tracking-wide-sm">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="link-ghost">{label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 font-display text-xs">
              <button onClick={() => setLang('en')} className={`px-2 py-1 ${lang === 'en' ? 'text-[var(--ink)]' : 'text-[var(--ink-faint)] hover:text-[var(--ink-dim)]'}`}>EN</button>
              <span className="text-[var(--ink-faint)]">/</span>
              <button onClick={() => setLang('lt')} className={`px-2 py-1 ${lang === 'lt' ? 'text-[var(--ink)]' : 'text-[var(--ink-faint)] hover:text-[var(--ink-dim)]'}`}>LT</button>
            </div>
            <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden font-display uppercase text-xs tracking-wide-sm border border-[var(--line)] px-3 py-1.5">
              {menuOpen ? '✕' : 'Menu'}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden border-t border-[var(--line)] mt-3 bg-[var(--bg)]/95 backdrop-blur">
            <div className="flex flex-col px-5 py-3 font-display uppercase text-sm tracking-wide-sm">
              {navLinks.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-2.5 text-[var(--ink-dim)] hover:text-[var(--ink)] border-b border-[var(--line)] last:border-0">{label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ---------------- HERO ---------------- */}
      <section id="top" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={bandPhoto} alt="" className="w-full h-full object-cover grayscale contrast-125 opacity-40 scale-105" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(6,6,6,0.2) 0%, rgba(6,6,6,0.75) 55%, var(--bg) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--bg) 0%, transparent 25%, transparent 70%, var(--bg) 100%)' }} />
        </div>

        <div className="relative z-10 text-center px-5">
          <img src={logo} alt="Anapilin" className="w-[min(88vw,640px)] mx-auto drop-shadow-[0_0_40px_rgba(0,0,0,0.9)] select-none" />
          <p className="font-display uppercase tracking-wide-sm text-[var(--ink-dim)] text-xs md:text-sm mt-6">{t.heroTag}</p>
          <div className="flex items-center justify-center gap-4 mt-9">
            <a href="#music" className="font-display uppercase tracking-wide-sm text-xs px-7 py-3 bg-[var(--blood)] hover:bg-[var(--blood-bright)] transition-colors">{t.heroCtaListen}</a>
            <a href="#press" className="font-display uppercase tracking-wide-sm text-xs px-7 py-3 border border-[var(--ink-faint)] hover:border-[var(--ink)] hover:bg-[var(--ink)]/5 transition-colors">{t.heroCtaPress}</a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[var(--ink-faint)]">
          <span className="font-display uppercase text-[10px] tracking-mega">Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-[var(--ink-faint)] to-transparent" />
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-5">

        {/* ---------------- BIO ---------------- */}
        <section id="bio" className="py-24 md:py-32 scroll-mt-20">
          <SectionHeading index="01">{t.bioTitle}</SectionHeading>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <Reveal className="md:col-span-7">
              <p className="text-xl md:text-2xl leading-relaxed text-[var(--ink)]">{t.bio}</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 font-display uppercase text-xs tracking-wide-sm">
                {socials.map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="link-ghost">{s.name}</a>
                ))}
              </div>
            </Reveal>
            <Reveal className="md:col-span-5 md:pl-6 md:border-l border-[var(--line)]" style={{ transitionDelay: '120ms' }}>
              <h3 className="font-display uppercase text-xs tracking-mega text-[var(--ink-faint)] mb-5">{t.factsTitle}</h3>
              <dl className="space-y-4">
                {t.facts.map((f) => (
                  <div key={f.k} className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
                    <dt className="font-display uppercase text-xs tracking-wide-sm text-[var(--ink-faint)] pt-1">{f.k}</dt>
                    <dd className="text-right text-[var(--ink)]">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* gallery */}
          <Reveal className="mt-16 relative" style={{ transitionDelay: '160ms' }}>
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-[var(--line)]">
              {carouselImages.map((img, i) => (
                <img key={i} src={img} alt={`Anapilin ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover grayscale contrast-110 transition-opacity duration-1000 ${i === carouselIdx ? 'opacity-100' : 'opacity-0'}`} />
              ))}
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 120px 30px rgba(6,6,6,0.7)' }} />
              <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[var(--bg)]/50 hover:bg-[var(--blood)] transition-colors text-lg">‹</button>
              <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[var(--bg)]/50 hover:bg-[var(--blood)] transition-colors text-lg">›</button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, i) => (
                  <button key={i} onClick={() => setCarouselIdx(i)} aria-label={`Slide ${i + 1}`}
                    className={`h-1 transition-all ${i === carouselIdx ? 'w-8 bg-[var(--blood-bright)]' : 'w-3 bg-[var(--ink-faint)]'}`} />
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------------- MUSIC ---------------- */}
        <section id="music" className="py-24 md:py-32 scroll-mt-20">
          <SectionHeading index="02">{t.musicTitle}</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <p className="font-display uppercase text-xs tracking-wide-sm text-[var(--ink-faint)] mb-3">{t.videoMainTitle}</p>
              <div className="aspect-video border border-[var(--line)] overflow-hidden">
                <iframe src={t.videoMain} title={t.videoMainTitle} className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </Reveal>
            <Reveal style={{ transitionDelay: '120ms' }}>
              <p className="font-display uppercase text-xs tracking-wide-sm text-[var(--ink-faint)] mb-3">{t.videoLiveTitle}</p>
              <div className="aspect-video border border-[var(--line)] overflow-hidden">
                <iframe src={t.videoLive} title={t.videoLiveTitle} className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-8 border border-[var(--line)] bg-[var(--bg-soft)] p-6 md:p-8" style={{ transitionDelay: '160ms' }}>
            <p className="font-black-letter text-2xl mb-4">{t.listenTitle}</p>
            <audio controls preload="none" className="w-full">
              <source src="/music/Anapilinpabaiga.wav" type="audio/wav" />
            </audio>
          </Reveal>
        </section>

        {/* ---------------- LIVE ---------------- */}
        <section id="live" className="py-24 md:py-32 scroll-mt-20">
          <SectionHeading index="03">{t.liveTitle}</SectionHeading>
          <ol className="relative border-l border-[var(--line)] ml-2">
            {t.performances.map((p, i) => (
              <Reveal as="li" key={i} className="pl-8 pb-10 last:pb-0 relative" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-[var(--blood-bright)]" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-5">
                  <span className="font-display text-[var(--ink-faint)] text-sm tracking-wide-sm w-14 shrink-0">{p.year}</span>
                  <div>
                    <h3 className="font-display uppercase text-xl tracking-wide-sm">{p.title}</h3>
                    <p className="text-[var(--ink-dim)] mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ---------------- MEMBERS ---------------- */}
        <section id="members" className="py-24 md:py-32 scroll-mt-20">
          <SectionHeading index="04">{t.membersTitle}</SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {members.map((m, i) => (
              <Reveal key={m.name} as="button" className="group text-left" style={{ transitionDelay: `${i * 80}ms` }}>
                <div onClick={() => setActiveMember(i === activeMember ? -1 : i)} className="cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden border border-[var(--line)]">
                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,6,6,0.9) 0%, transparent 50%)' }} />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-display uppercase text-base tracking-wide-sm leading-tight">{m.name}</h3>
                      <p className="text-[var(--blood-bright)] font-display uppercase text-[10px] tracking-wide-sm mt-1">{m.role[lang]}</p>
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ${activeMember === i ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                    <p className="text-sm text-[var(--ink-dim)] italic leading-relaxed">{m.bio[lang]}</p>
                    <p className="font-display text-[10px] tracking-wide-sm text-[var(--ink-faint)] mt-2">{lang === 'en' ? 'Since' : 'Nuo'} {m.years}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- DISCOGRAPHY ---------------- */}
        <section id="discography" className="py-24 md:py-32 scroll-mt-20">
          <SectionHeading index="05">{t.discographyTitle}</SectionHeading>
          <div>
            {t.discography.map((d, i) => (
              <Reveal as="div" key={d.name + d.year} style={{ transitionDelay: `${i * 40}ms` }}
                className="group grid grid-cols-12 items-baseline gap-3 py-4 border-b border-[var(--line)] hover:bg-[var(--bg-soft)] transition-colors px-2">
                <span className="col-span-2 md:col-span-1 font-display text-[var(--ink-faint)] text-sm">{d.year}</span>
                <span className="col-span-7 md:col-span-8 font-display uppercase text-lg md:text-xl tracking-wide-sm group-hover:text-[var(--blood-bright)] transition-colors">{d.name}</span>
                <span className="col-span-3 text-right font-display uppercase text-xs tracking-wide-sm text-[var(--ink-dim)]">{d.type}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- HISTORY ---------------- */}
        <section className="py-24 md:py-32">
          <SectionHeading index="06">{t.historyTitle}</SectionHeading>
          <Reveal className="max-w-3xl">
            <p className="text-lg leading-loose text-[var(--ink-dim)] [&_em]:text-[var(--ink)] [&_em]:not-italic [&_em]:font-medium"
              dangerouslySetInnerHTML={{ __html: t.history }} />
          </Reveal>
        </section>

        {/* ---------------- PRESS ---------------- */}
        <section id="press" className="py-24 md:py-32 scroll-mt-20">
          <SectionHeading index="07">{t.pressTitle}</SectionHeading>
          <Reveal><p className="text-lg text-[var(--ink-dim)] max-w-2xl mb-12">{t.pressLead}</p></Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {t.downloads.map((d, i) => (
              <Reveal as="a" key={d.label} href={d.href} download style={{ transitionDelay: `${i * 80}ms` }}
                className="group block border border-[var(--line)] p-7 hover:border-[var(--blood)] hover:bg-[var(--bg-soft)] transition-all">
                <span className="font-display uppercase text-xs tracking-mega text-[var(--ink-faint)]">PDF</span>
                <h3 className="font-display uppercase text-lg tracking-wide-sm mt-3 group-hover:text-[var(--blood-bright)] transition-colors">{d.label}</h3>
                <span className="inline-block mt-4 text-[var(--ink-dim)] group-hover:translate-x-1 transition-transform">↓ {lang === 'en' ? 'Download' : 'Atsisiųsti'}</span>
              </Reveal>
            ))}
          </div>

          {/* contact */}
          <Reveal className="mt-16 border-t border-[var(--line)] pt-12 text-center">
            <h3 className="font-display uppercase text-xs tracking-mega text-[var(--ink-faint)] mb-4">{t.contactTitle}</h3>
            <p className="text-[var(--ink-dim)] mb-3">{t.contactLead}</p>
            <a href={`mailto:${t.contact}`} className="font-black-letter text-3xl md:text-4xl text-[var(--ink)] hover:text-[var(--blood-bright)] transition-colors break-all">{t.contact}</a>
          </Reveal>
        </section>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="max-w-6xl mx-auto px-5 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display uppercase tracking-mega text-sm">Anapilin</p>
            <p className="text-[var(--ink-faint)] text-sm mt-1">© {new Date().getFullYear()} — {t.rights}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-display uppercase text-xs tracking-wide-sm">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="link-ghost">{s.name}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
