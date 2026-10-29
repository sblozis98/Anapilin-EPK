import os
import shutil
import subprocess
import tempfile
from pathlib import Path
from jinja2 import Environment

# Band info (keep in sync with src/App.jsx)
socials = [
    {'name': 'Bandcamp', 'url': 'https://anapilin.bandcamp.com/'},
    {'name': 'Spotify', 'url': 'https://open.spotify.com/artist/6GzFvNkfrjnSQZMfNcLJZO'},
    {'name': 'YouTube', 'url': 'https://www.youtube.com/@anapilinofficial'},
    {'name': 'Instagram', 'url': 'https://www.instagram.com/anapilinofficial/'},
    {'name': 'Facebook', 'url': 'https://www.facebook.com/anapilinofficial/'},
]

videos = {
    'main': 'https://www.youtube.com/watch?v=hzY57sFluS8',
    'live': 'https://www.youtube.com/watch?v=Uqqmwaj7i64&t=317s',
}

band_info = {
    'name': 'Anapilin',
    'genre': 'Black Metal',
    'origin': 'Kaunas, Lithuania',
    'formed': '2016',
    'contact': 'anapilinofficial@gmail.com',
    'bio': 'Anapilin is a black metal band exploring the existential, spiritual, and mystical aspects of life and death. Their music is built on atmospheric, cold soundscapes, captivating guitar riffs, and profound, poetic lyrics — inviting the listener on a journey between light and darkness, life and eternity.',
    'socials': socials,
    'performances': [
        "Velniava'2025 – Shared the stage with God Dethroned, Night Slasher, and Black Spikes at Pramogų salė Vakaris, Vilnius, on March 29, 2025.",
        "Howls of Winter XII (2025) – Underground black metal festival at Rockclub Tapper, Tallinn, Estonia, with Abduction, izrod, Lunar Mantra, and Sargeist.",
        "Zobens un Lēmes 2024 – Prestigious metal festival in Bauska, Latvia, alongside Samael, Thyrfing, and Metsatöll.",
        "Akhlys concert – On December 3, 2023, Anapilin performed with US band Akhlys at nArauti club, Vilnius.",
        "Misþyrming concert – On March 10, 2020, Anapilin performed with Icelandic band Misþyrming at Narauti club, Vilnius.",
    ],
    'discography': [
        { 'name': 'Monotonija', 'type': 'Single', 'year': 2025 },
        { 'name': 'Anapilin', 'type': 'EP', 'year': 2024 },
        { 'name': 'Applause in an Empty Theater', 'type': 'Single', 'year': 2024 },
        { 'name': 'Breaking the Fourth Wall', 'type': 'Single', 'year': 2024 },
        { 'name': 'Tuščia erdvė', 'type': 'Single', 'year': 2023 },
        { 'name': 'Pabaiga', 'type': 'Single', 'year': 2022 },
        { 'name': 'Dezintegracija', 'type': 'Full-length', 'year': 2021 },
        { 'name': 'Neganda', 'type': 'Single', 'year': 2020 },
        { 'name': 'Urvas', 'type': 'Demo', 'year': 2020 },
        { 'name': 'Krachas', 'type': 'EP', 'year': 2019 },
    ],
    'labels': {
        'formed': 'Formed', 'contact': 'Contact', 'members': 'Band Members',
        'performances': 'Notable Performances', 'discography': 'Discography',
        'main_video': 'Official Video', 'live_video': 'Live Video',
    },
}

band_info_lt = {
    'name': 'Anapilin',
    'genre': 'Juodasis metalas',
    'origin': 'Kaunas, Lietuva',
    'formed': '2016',
    'contact': 'anapilinofficial@gmail.com',
    'bio': '„Anapilin“ – juodojo metalo grupė, tyrinėjanti egzistencinius, dvasinius ir mistinius gyvenimo bei mirties aspektus. Kūryba remiasi atmosferišku, šaltu skambesiu, įtraukiančiais gitarų rifais ir giliais, poetiškais tekstais – kviečia klausytoją į kelionę tarp šviesos ir tamsos, gyvenimo ir amžinybės.',
    'socials': socials,
    'performances': [
        "Velniava'2025 – Pasirodymas Vilniuje kartu su God Dethroned, Night Slasher ir Black Spikes, Pramogų salė „Vakaris“, 2025-03-29.",
        "Howls of Winter XII (2025) – Underground juodojo metalo festivalis Taline, Estijoje, kartu su Abduction, izrod, Lunar Mantra ir Sargeist.",
        "Zobens un Lēmes 2024 – Prestižinis metalo festivalis Bauskėje, Latvijoje, kartu su Samael, Thyrfing ir Metsatöll.",
        "Akhlys koncertas – 2023 m. gruodžio 3 d. Anapilin pasirodė su amerikiečių grupe Akhlys Vilniaus klube „nArauti“.",
        "Misþyrming koncertas – 2020 m. kovo 10 d. Anapilin pasirodė su islandų grupe Misþyrming Vilniaus klube „Narauti“.",
    ],
    'discography': [
        { 'name': 'Monotonija', 'type': 'Singlas', 'year': 2025 },
        { 'name': 'Anapilin', 'type': 'EP', 'year': 2024 },
        { 'name': 'Applause in an Empty Theater', 'type': 'Singlas', 'year': 2024 },
        { 'name': 'Breaking the Fourth Wall', 'type': 'Singlas', 'year': 2024 },
        { 'name': 'Tuščia erdvė', 'type': 'Singlas', 'year': 2023 },
        { 'name': 'Pabaiga', 'type': 'Singlas', 'year': 2022 },
        { 'name': 'Dezintegracija', 'type': 'Pilnas albumas', 'year': 2021 },
        { 'name': 'Neganda', 'type': 'Singlas', 'year': 2020 },
        { 'name': 'Urvas', 'type': 'Demo', 'year': 2020 },
        { 'name': 'Krachas', 'type': 'EP', 'year': 2019 },
    ],
    'labels': {
        'formed': 'Įkurta', 'contact': 'Kontaktai', 'members': 'Grupės nariai',
        'performances': 'Išskirtiniai pasirodymai', 'discography': 'Diskografija',
        'main_video': 'Oficialus vaizdo klipas', 'live_video': 'Gyvai',
    },
}

members = [
    {
        'name': 'Sandžėjus Sankaras',
        'role': {'en': 'Lead Guitars', 'lt': 'Pagrindinė gitara'},
        'years': '2016',
        'bio': {
            'en': 'One of the band’s founders, shaping its melodic and atmospheric sound with his creative vision.',
            'lt': 'Vienas iš grupės įkūrėjų, kurio kūrybinė vizija formuoja melodingą ir atmosferinį skambesį.'
        },
    },
    {
        'name': 'Simonas Bložis',
        'role': {'en': 'Vocals · Rhythm Guitar', 'lt': 'Vokalas · Ritminė gitara'},
        'years': '2016',
        'bio': {
            'en': 'Haunting vocals and solid rhythm guitar, contributing poetic lyrics and emotional depth.',
            'lt': 'Užburiantys vokalai ir tvirta ritmo gitara; poetiški tekstai ir emocinis gylis.'
        },
    },
    {
        'name': 'Tauras Jasionis',
        'role': {'en': 'Drums', 'lt': 'Būgnai'},
        'years': '2023',
        'bio': {
            'en': 'Drumming that brings intensity and precision, driving the band’s rhythmic backbone.',
            'lt': 'Intensyvus ir preciziškas būgnavimas, palaikantis grupės ritminį pagrindą.'
        },
    },
]

template_html = '''
<!DOCTYPE html>
<html lang="{{ lang }}">
<head>
    <meta charset="utf-8">
    <title>{{ band_info.name }} – EPK</title>
    <style>
        @page { size: A4; margin: 14mm; }
        body { font-family: Arial, sans-serif; color: #181818; background: #fff; margin: 0; padding: 0; }
        .container { max-width: 900px; margin: 0 auto; padding: 24px; background: #f6f6f6; border-radius: 12px; }
        h1, h2, h3 { color: #111; }
        .section { margin-bottom: 32px; }
        .socials a { margin-right: 16px; color: #222; text-decoration: none; font-weight: bold; }
        .youtube-link { display: inline-block; margin: 8px 12px 8px 0; color: #c4302b; font-weight: bold; text-decoration: none; }
        .member-list { display: flex; flex-wrap: wrap; gap: 24px; justify-content: flex-start; }
        .member-card { flex: 1 1 220px; background: #fff; border-radius: 8px; padding: 16px; box-shadow: 0 2px 8px #0001; text-align: left; min-width: 220px; max-width: 300px; break-inside: avoid; }
        .member-card b { font-size: 1.05em; }
        .member-card .role { font-size: 1em; color: #333; margin-bottom: 2px; }
        .member-card .years { font-size: 12px; color: #666; margin-bottom: 8px; }
        .member-card .bio { font-style: italic; font-size: 13px; color: #222; }
        .discography-list { list-style: none; padding: 0; }
        .discography-list li { margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #e0e0e0; }
        .discography-list .release-title { font-weight: bold; }
        .discography-list .release-type, .discography-list .release-year { color: #555; font-size: 0.96em; margin-left: 8px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>{{ band_info.name }}</h1>
        <h3>{{ band_info.genre }} | {{ band_info.origin }} | {{ band_info.labels.formed }}: {{ band_info.formed }}</h3>
        <div class="section">
            <b>{{ band_info.labels.contact }}:</b> {{ band_info.contact }}<br/>
            <div class="socials" style="margin-top: 8px;">
                {% for s in band_info.socials %}
                <a href="{{ s.url }}">{{ s.name }}</a>
                {% endfor %}
            </div>
            <div style="margin-top: 10px;">
                <a href="{{ videos.main }}" class="youtube-link">{{ band_info.labels.main_video }}</a>
                <a href="{{ videos.live }}" class="youtube-link">{{ band_info.labels.live_video }}</a>
            </div>
        </div>
        <div class="section">
            <p style="font-style: italic; font-size: 1.08em; margin-bottom: 0;">{{ band_info.bio }}</p>
        </div>
        <div class="section">
            <h2 style="margin-bottom: 12px;">{{ band_info.labels.members }}</h2>
            <div class="member-list">
                {% for m in members %}
                <div class="member-card">
                    <b>{{ m.name }}</b>
                    <div class="role">{{ m.role[lang] }}</div>
                    <div class="years">{{ m.years }}–</div>
                    <div class="bio">{{ m.bio[lang] }}</div>
                </div>
                {% endfor %}
            </div>
        </div>
        <div class="section">
            <h2 style="margin-bottom: 12px;">{{ band_info.labels.performances }}</h2>
            <ul>
            {% for perf in band_info.performances %}
                <li>{{ perf }}</li>
            {% endfor %}
            </ul>
        </div>
        <div class="section">
            <h2 style="margin-bottom: 12px;">{{ band_info.labels.discography }}</h2>
            <ul class="discography-list">
                {% for item in band_info.discography %}
                <li>
                    <span class="release-title">{{ item.name }}</span>
                    <span class="release-type">({{ item.type }})</span>
                    <span class="release-year">{{ item.year }}</span>
                </li>
                {% endfor %}
            </ul>
        </div>
    </div>
</body>
</html>
'''

OUT_DIR = Path(__file__).resolve().parent / 'public'

BROWSER_CANDIDATES = [
    os.environ.get('CHROME_PATH'),
    shutil.which('chrome'),
    shutil.which('msedge'),
    shutil.which('google-chrome'),
    shutil.which('chromium'),
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
]


def find_browser():
    for path in BROWSER_CANDIDATES:
        if path and Path(path).exists():
            return path
    raise RuntimeError('Chrome/Edge not found; set CHROME_PATH')


def main(lang='en'):
    bi = band_info_lt if lang == 'lt' else band_info
    html = Environment().from_string(template_html).render(
        band_info=bi, members=members, videos=videos, lang=lang,
    )
    out_pdf = OUT_DIR / f'Anapilin-EPK-{lang}.pdf'
    with tempfile.TemporaryDirectory() as tmp:
        temp_html = Path(tmp) / f'epk_{lang}.html'
        temp_html.write_text(html, encoding='utf-8')
        subprocess.run([
            find_browser(), '--headless=new', '--disable-gpu',
            '--no-pdf-header-footer', '--print-to-pdf-no-header',
            f'--user-data-dir={Path(tmp) / "profile"}',
            f'--print-to-pdf={out_pdf}', temp_html.as_uri(),
        ], check=True, capture_output=True)
    print(f'Wrote {out_pdf}')


if __name__ == '__main__':
    main('en')
    main('lt')
