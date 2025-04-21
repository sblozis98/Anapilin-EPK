import { useState } from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
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

const content = {
  en: {
    title: 'Anapilin – EPK',
    genre: 'Black Metal',
    origin: 'Kaunas, Lithuania',
    formed: '2016',
    contact: 'anapilinofficial@gmail.com',
    socials: [
      { name: 'Bandcamp', url: 'https://anapilin.bandcamp.com/' },
      { name: 'Facebook', url: 'https://www.facebook.com/anapilinofficial/' },
      { name: 'Instagram', url: 'https://www.instagram.com/anapilinofficial/' },
      { name: 'YouTube', url: 'https://www.youtube.com/@anapilinofficial' },
      { name: 'Spotify', url: 'https://open.spotify.com/artist/6GzFvNkfrjnSQZMfNcLJZO' },
    ],
    bio: `“Anapilin” is a black metal band exploring existential, spiritual, and mystical aspects of life and death. Their music features atmospheric, cold soundscapes, captivating guitar riffs, and profound, poetic lyrics. The band’s compositions invite listeners on a journey between light and darkness, life and eternity.`,
    videoMain: 'https://www.youtube.com/embed/TjxGT0yPGPM',
    videoLive: 'https://www.youtube.com/embed/Uqqmwaj7i64?start=317',
    performances: [
      {
        title: `Velniava'2025 – Sharing the stage with God Dethroned, Night Slasher, and Black Spikes at Pramogų salė Vakaris, Vilnius, on March 29, 2025.`,
      },
      {
        title: `Zobens un Lēmes 2024 – Anapilin performed at this prestigious metal festival in Bauska, Latvia, alongside Samael, Thyrfing, and Metsatöll.`,
      },
      {
        title: `Howls of Winter XII (2025) – Participated in this underground black metal festival at Rockclub Tapper, Tallinn, Estonia, with Abduction, izrod, Lunar Mantra, and Sargeist.`,
      },
      {
        title: `Misþyrming concert – On March 10, 2020, Anapilin performed with Icelandic band Misþyrming at Narauti club, Vilnius.`,
      },
      {
        title: `Akhlys concert – On December 3, 2023, Anapilin performed with US band Akhlys at nArauti club, Vilnius.`,
      },
    ],
    download: 'Download EPK as PDF',
    photos: [logo],
    discography: [
      { name: 'Krachas', type: 'EP', year: 2019 },
      { name: 'Neganda', type: 'Single', year: 2020 },
      { name: 'Urvas', type: 'Demo', year: 2020 },
      { name: 'Dezintegracija', type: 'Full-length', year: 2021 },
      { name: 'Pabaiga', type: 'Single', year: 2022 },
      { name: 'Tuščia erdvė', type: 'Single', year: 2023 },
      { name: 'Breaking the Fourth Wall', type: 'Single', year: 2024 },
      { name: 'Applause in an Empty Theater', type: 'Single', year: 2024 },
      { name: 'Anapilin', type: 'EP', year: 2024 },
    ],
    history: {
      text: `Anapilin is a black metal band from Kaunas, Lithuania, formed in 2016 by Sandžejus and Simonas, who hailed from different cities. The band's lineup was solidified after meeting additional members at a local metal concert in Kaunas, which has since become their base of operations.<br/><br/>
              Initially, Anapilin experimented with various genres, but their primary focus remained on black metal. Their early work culminated in the release of their debut EP, Krachas, in 2019. This was followed by their first full-length album, Dezintegracija, released on June 20, 2021. The album was recorded during the COVID-19 quarantine, with members contributing their parts from home, presenting unique challenges to the production process.<br/><br/>
              Following internal changes, including the replacement of their drummer and bassist, Anapilin solidified their lineup with Tauras on drums and Aurimas on bass. This stable formation led to the release of several singles and a self-titled EP in late 2024. The band's music is characterized by its atmospheric, cold sound, engaging guitar riffs, and deep, poetic lyrics that explore existential, spiritual, and mystical aspects of life and death.<br/><br/>
              Anapilin continues to be an active presence in the Lithuanian metal scene, performing live at various events. They are currently working on their next full-length album, further delving into themes of human downfall, psychological collapse, and a crumbling environment.`,
    },
  },
  lt: {
    title: 'Anapilin – EPK',
    genre: 'Juodasis metalas',
    origin: 'Kaunas, Lietuva',
    formed: '2016',
    contact: 'anapilinofficial@gmail.com',
    socials: [
      { name: 'Bandcamp', url: 'https://anapilin.bandcamp.com/' },
      { name: 'Facebook', url: 'https://www.facebook.com/anapilinofficial/' },
      { name: 'Instagram', url: 'https://www.instagram.com/anapilinofficial/' },
      { name: 'YouTube', url: 'https://www.youtube.com/@anapilinofficial' },
      { name: 'Spotify', url: 'https://open.spotify.com/artist/6GzFvNkfrjnSQZMfNcLJZO' },
    ],
    bio: `„Anapilin“ – juodojo metalo grupė, tyrinėjanti egzistencinius, dvasinius ir mistinius gyvenimo ir mirties aspektus. Jų kūryba pasižymi atmosferišku, šaltu skambesiu, įtraukiančiais gitarų rifais ir giliais, poetiškais tekstais. Grupės muzika kviečia klausytoją į kelionę tarp šviesos ir tamsos, gyvenimo ir amžinybės.`,
    videoMain: 'https://www.youtube.com/embed/TjxGT0yPGPM',
    videoLive: 'https://www.youtube.com/embed/Uqqmwaj7i64?start=317',
    performances: [
      {
        title: `Zobens un Lēmes 2024 – Anapilin pasirodė šiame prestižiniame metalų festivalyje Latvijoje, kartu su Samael, Thyrfing ir Metsatöll.`,
      },
      {
        title: `Howls of Winter XII (2025) – Grupė dalyvavo šiame underground juodojo metalo festivalyje Taline, Estijoje, kartu su Abduction, izrod, Lunar Mantra ir Sargeist.`,
      },
      {
        title: `Velniava'2025 – Anapilin pasirodė Vilniuje, kartu su God Dethroned, Night Slasher ir Black Spikes.`,
      },
      {
        title: `Misþyrming koncertas – 2020 m. kovo 10 d. Anapilin pasirodė su islandų grupe Misþyrming Vilniaus klube „Narauti“.`,
      },
      {
        title: `Akhlys koncertas – 2023 m. gruodžio 3 d. Anapilin pasirodė su amerikiečių grupe Akhlys Vilniaus klube „nArauti“.`,
      },
    ],
    download: 'Atsisiųsti EPK kaip PDF',
    photos: [logo],
    discography: [
      { name: 'Krachas', type: 'EP', year: 2019 },
      { name: 'Neganda', type: 'Singlas', year: 2020 },
      { name: 'Urvas', type: 'Demo', year: 2020 },
      { name: 'Dezintegracija', type: 'Pilnas albumas', year: 2021 },
      { name: 'Pabaiga', type: 'Singlas', year: 2022 },
      { name: 'Tuščia erdvė', type: 'Singlas', year: 2023 },
      { name: 'Breaking the Fourth Wall', type: 'Singlas', year: 2024 },
      { name: 'Applause in an Empty Theater', type: 'Singlas', year: 2024 },
      { name: 'Anapilin', type: 'EP', year: 2024 },
    ],
    history: {
      text: `Anapilin – tai juodojo metalo grupė iš Kauno, susikūrusi 2016 metais. Grupės pradžią davė du nariai – Sandžejus ir Simonas, kilę iš skirtingų miestų. Kiek vėliau likę nariai buvo surasti vietiniame metalo koncerte Kaune, o nuo to laiko visa grupės veikla persikėlė į Kauną.<br/><br/>
Pradžioje grupė eksperimentavo su įvairiais žanrais, tačiau pagrindinis dėmesys visada buvo skiriamas juodajam metalui. Jų ankstyvoji kūryba kulminavo pirmojo EP „Krachas“ išleidimu 2019 metais. Tai buvo pirmasis žingsnis link sėkmės: grupė pradėjo aktyviai koncertuoti.<br/><br/>
Pasikeitus bosistui, grupė karantino metu išleido pirmąjį pilno metro albumą – „Dezintegracija“. Kadangi įrašai vyko per pandemiją, kiekvienas narys turėjo įrašinėti savo partijas namuose, todėl leidybos procesas buvo sudėtingas.<br/><br/>
Vėliau, dėl vidinių nesutarimų, pasikeitė ir būgnininkas – jį pakeitė dabartinis narys Tauras, o bosine gitara pradėjo groti Aurimas. Nuo tada grupės sudėtis tapo stabili kaip niekada anksčiau. Su naująja sudėtimi išleista keletas singlų bei mini albumas (EP) „Anapilin“, o šiuo metu grupė intensyviai dirba prie naujo LP albumo.`,
    },
  },
};

const members = [
  {
    name: 'Sandžėjus Sankaras',
    role: 'Guitars (lead)',
    years: '2016-present',
    photo: sandzejus,
    bio: {
      en: 'Sandžėjus is the founding guitarist of Anapilin, shaping the band’s melodic and atmospheric sound with his creative vision.',
      lt: 'Sandžėjus yra pagrindinis „Anapilin“ gitaristas, kurio kūrybinė vizija formuoja grupės melodingą ir atmosferinį skambesį.'
    },
  },
  {
    name: 'Simonas Bložis',
    role: 'Vocals, Guitars (rhythm)',
    years: '2016-present',
    photo: simonas,
    bio: {
      en: 'Simonas brings haunting vocals and solid rhythm guitar, contributing poetic lyrics and emotional depth.',
      lt: 'Simonas suteikia grupės muzikai užburiančius vokalus ir tvirtą ritmo gitarą, prisideda poetiškais tekstais ir emociniu gilumu.'
    },
  },
  {
    name: 'Aurimas Krivinskas',
    role: 'Bass',
    years: '2023-present',
    photo: aurimas,
    bio: {
      en: 'Aurimas joined Anapilin in 2023, providing a powerful low-end and dynamic stage presence.',
      lt: 'Aurimas prisijungė prie „Anapilin“ 2023 m., suteikdamas galingą bosą ir dinamišką sceninį įvaizdį.'
    },
  },
  {
    name: 'Tauras Jasionis',
    role: 'Drums',
    years: '2023-present',
    photo: tauras,
    bio: {
      en: 'Tauras’s drumming brings intensity and precision, driving the band’s rhythmic backbone.',
      lt: 'Tauro būgnavimas suteikia grupei intensyvumo ir preciziškumo, palaiko ritminį pagrindą.'
    },
  },
];

const carouselImages = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
];

function App() {
  const [lang, setLang] = useState('en');
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [selectedMemberIdx, setSelectedMemberIdx] = useState(0);
  const t = content[lang];

  const prevSlide = () => setCarouselIdx((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  const nextSlide = () => setCarouselIdx((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-100 font-serif relative">
      {/* Sides using different parts of the band photo via object-position */}
      <img src={bandPhoto} alt="side left" className="fixed left-0 top-0 h-full w-40 object-cover opacity-30 grayscale contrast-150 select-none pointer-events-none" style={{mixBlendMode:'lighten', objectPosition:'left center'}} />
      <img src={bandPhoto} alt="side right" className="fixed right-0 top-0 h-full w-40 object-cover opacity-30 grayscale contrast-150 select-none pointer-events-none" style={{mixBlendMode:'lighten', transform:'scaleX(-1)', objectPosition:'right center'}} />
      <div className="flex-1 flex items-center justify-center px-2 md:px-0 relative">
        <div className="max-w-3xl py-8 mx-auto">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <div className="flex flex-col items-center gap-4 mb-6">
            <img src={t.photos[0]} alt="Anapilin logo" className="h-64 md:h-96 mb-2 drop-shadow-lg" />
          </div>

          {/* Carousel Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-full max-w-3xl"> {/* Match EPK width */}
              <img
                src={carouselImages[carouselIdx]}
                alt={`Carousel ${carouselIdx + 1}`}
                className="rounded-lg border border-gray-800 w-full h-72 object-cover shadow-lg"
              />
              <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-80">&#8592;</button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-80">&#8594;</button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {carouselImages.map((_, idx) => (
                  <span key={idx} className={`inline-block w-2 h-2 rounded-full ${idx === carouselIdx ? 'bg-white' : 'bg-gray-600'}`}></span>
                ))}
              </div>
            </div>
          </div>

          <div id="epk-content" className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg border border-gray-800">
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-2 text-center" style={{letterSpacing:'0.1em'}}>{t.title}</h1>
            <div className="flex flex-col md:flex-row justify-between mb-3 text-sm md:text-base gap-2">
              <div>
                <span className="font-bold">Genre:</span> {t.genre}<br/>
                <span className="font-bold">Origin:</span> {t.origin}<br/>
                <span className="font-bold">Formed:</span> {t.formed}<br/>
              </div>
              <div>
                <span className="font-bold">Contact:</span> <a href={`mailto:${t.contact}`} style={{ color: '#FF0000' }} className="underline hover:text-[#ff5252]">{t.contact}</a><br/>
                <span className="font-bold">Socials:</span> {t.socials.map((s, i) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#FF0000' }} className="ml-2 underline hover:text-[#ff5252]">{s.name}</a>
                ))}
              </div>
            </div>
            <p className="italic text-gray-300 mb-4 text-center">{t.bio}</p>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <div className="aspect-video bg-black border border-gray-700 rounded-lg overflow-hidden mb-2">
                  <iframe
                    src={t.videoMain}
                    title="Anapilin video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="aspect-video bg-black border border-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    src={t.videoLive}
                    title="Anapilin live footage"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{lang === 'en' ? 'Notable Performances' : 'Išskirtiniai pasirodymai'}</h2>
                <ul className="list-disc ml-5 space-y-2">
                  {t.performances.map((p, i) => (
                    <li key={i}>{p.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Band History Section */}
          <div className="mb-8 max-w-3xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">{lang === 'en' ? 'Band History' : 'Grupės istorija'}</h2>
            <div className="bg-black bg-opacity-60 rounded-lg p-4 shadow text-base text-white">
              <p dangerouslySetInnerHTML={{ __html: t.history.text }} />
            </div>
          </div>

          {/* Band Members Section */}
          <div className="mb-8 max-w-3xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center">{lang === 'en' ? 'Band Members' : 'Grupės nariai'}</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {members.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMemberIdx(idx)}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition focus:outline-none ${selectedMemberIdx === idx ? 'bg-gray-800 border-white text-white' : 'bg-gray-900 border-gray-600 text-gray-300 hover:bg-gray-800'}`}
                >
                  {m.name}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start gap-6 bg-black bg-opacity-60 border border-gray-700 rounded-lg p-4 shadow">
              <img
                src={members[selectedMemberIdx].photo}
                alt={members[selectedMemberIdx].name}
                className="w-40 h-40 object-cover rounded-full border-2 border-gray-700 shadow-md mb-4 md:mb-0"
              />
              <div className="flex-1 text-center md:text-left">
                <div className="font-bold text-xl mb-1">{members[selectedMemberIdx].name}</div>
                <div className="text-gray-300 mb-1">{members[selectedMemberIdx].role}</div>
                <div className="text-xs text-gray-400 mb-2">{members[selectedMemberIdx].years}</div>
                <div className="italic text-gray-200">{members[selectedMemberIdx].bio[lang]}</div>
              </div>
            </div>
          </div>

          {/* Discography Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">{lang === 'en' ? 'Discography' : 'Diskografija'}</h2>
            <div className="overflow-x-auto max-w-3xl mx-auto">
              <table className="min-w-full bg-black bg-opacity-60 border border-gray-700 rounded-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b border-gray-600">{lang === 'en' ? 'Name' : 'Pavadinimas'}</th>
                    <th className="px-4 py-2 border-b border-gray-600">{lang === 'en' ? 'Type' : 'Tipas'}</th>
                    <th className="px-4 py-2 border-b border-gray-600">{lang === 'en' ? 'Year' : 'Metai'}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.discography.map((item, i) => (
                    <tr key={i} className="text-center">
                      <td className="px-4 py-2 border-b border-gray-700">{item.name}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{item.type}</td>
                      <td className="px-4 py-2 border-b border-gray-700">{item.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Music Player Section - local audio */}
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">{lang === 'en' ? 'Listen' : 'Klausykite'}</h2>
            <audio controls className="w-full max-w-xl rounded shadow-lg bg-black">
              <source src="/Anapilin-EPK/music/Anapilinpabaiga.wav" type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="flex flex-col sm:flex-row justify-center mt-6 gap-4 max-w-3xl mx-auto w-full px-2">
            <a
              href="/Anapilin-EPK/Anapilin-EPK-en.pdf"
              download
              style={{ color: '#FF0000' }}
              className="bg-gray-900 border border-gray-700 px-4 py-2 rounded hover:text-[#ff5252] hover:bg-gray-800 hover:border-white transition"
            >
              {lang === 'en' ? 'Download EPK (EN)' : 'Atsisiųsti EPK (EN)'}
            </a>
            <a
              href="/Anapilin-EPK/Anapilin-EPK-lt.pdf"
              download
              style={{ color: '#FF0000' }}
              className="bg-gray-900 border border-gray-700 px-4 py-2 rounded hover:text-[#ff5252] hover:bg-gray-800 hover:border-white transition"
            >
              {lang === 'en' ? 'Download EPK (LT)' : 'Atsisiųsti EPK (LT)'}
            </a>
            <a
              href="/Anapilin-EPK/assets/rider/rider.pdf"
              download
              style={{ color: '#FF0000' }}
              className="bg-gray-900 border border-gray-700 px-4 py-2 rounded hover:text-[#ff5252] hover:bg-gray-800 hover:border-white transition"
            >
              {lang === 'en' ? 'Download Rider' : 'Atsisiųsti Riderį'}
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center text-xs text-gray-500 py-4 opacity-60 w-full">
        &copy; {new Date().getFullYear()} Anapilin
      </footer>
    </div>
  );
}

export default App;
