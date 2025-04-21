import pdfkit
from jinja2 import Environment
import os

# Band info (edit or import from your JS if needed)
band_info = {
    'name': 'Anapilin',
    'genre': 'Black Metal',
    'origin': 'Kaunas, Lithuania',
    'formed': '2016',
    'contact': 'anapilinofficial@gmail.com',
    'bio': '“Anapilin” is a black metal band exploring existential, spiritual, and mystical aspects of life and death. Their music features atmospheric, cold soundscapes, captivating guitar riffs, and profound, poetic lyrics. The band’s compositions invite listeners on a journey between light and darkness, life and eternity.',
    'socials': [
        {'name': 'Bandcamp', 'url': 'https://anapilin.bandcamp.com/'},
        {'name': 'Facebook', 'url': 'https://www.facebook.com/anapilinofficial/'},
        {'name': 'Instagram', 'url': 'https://www.instagram.com/anapilinofficial/'},
        {'name': 'YouTube', 'url': 'https://www.youtube.com/@anapilinofficial'},
    ],
    'performances': [
        "Velniava'2025 – Sharing the stage with God Dethroned, Night Slasher, and Black Spikes at Pramogų salė Vakaris, Vilnius, on March 29, 2025.",
        "Zobens un Lēmes 2024 – Anapilin performed at this prestigious metal festival in Bauska, Latvia, alongside Samael, Thyrfing, and Metsatöll.",
        "Howls of Winter XII (2025) – Participated in this underground black metal festival at Rockclub Tapper, Tallinn, Estonia, with Abduction, izrod, Lunar Mantra, and Sargeist.",
        "Howls of Winter XII (2025) – Participated in this underground black metal festival at Rockclub Tapper, Tallinn, Estonia, with Abduction, izrod, Lunar Mantra, and Sargeist.",
        "Misþyrming concert – On March 10, 2020, Anapilin performed with Icelandic band Misþyrming at Narauti club, Vilnius.",
        "Akhlys concert – On December 3, 2023, Anapilin performed with US band Akhlys at nArauti club, Vilnius."
    ],
    'discography': [
        { 'name': 'Krachas', 'type': 'EP', 'year': 2019 },
        { 'name': 'Neganda', 'type': 'Single', 'year': 2020 },
        { 'name': 'Urvas', 'type': 'Demo', 'year': 2020 },
        { 'name': 'Dezintegracija', 'type': 'Full-length', 'year': 2021 },
        { 'name': 'Pabaiga', 'type': 'Single', 'year': 2022 },
        { 'name': 'Tuščia erdvė', 'type': 'Single', 'year': 2023 },
        { 'name': 'Breaking the Fourth Wall', 'type': 'Single', 'year': 2024 },
        { 'name': 'Applause in an Empty Theater', 'type': 'Single', 'year': 2024 },
        { 'name': 'Anapilin', 'type': 'EP', 'year': 2024 },
    ],
}

band_info_lt = {
    'name': 'Anapilin',
    'genre': 'Juodasis metalas',
    'origin': 'Kaunas, Lietuva',
    'formed': '2016',
    'contact': 'anapilinofficial@gmail.com',
    'bio': '„Anapilin“ – juodojo metalo grupė, tyrinėjanti egzistencinius, dvasinius ir mistinius gyvenimo ir mirties aspektus. Jų kūryba pasižymi atmosferišku, šaltu skambesiu, įtraukiančiais gitarų rifais ir giliais, poetiškais tekstais. Grupės muzika kviečia klausytoją į kelionę tarp šviesos ir tamsos, gyvenimo ir amžinybės.',
    'socials': [
        {'name': 'Bandcamp', 'url': 'https://anapilin.bandcamp.com/'},
        {'name': 'Facebook', 'url': 'https://www.facebook.com/anapilinofficial/'},
        {'name': 'Instagram', 'url': 'https://www.instagram.com/anapilinofficial/'},
        {'name': 'YouTube', 'url': 'https://www.youtube.com/@anapilinofficial'},
    ],
    'performances': [
        "Velniava'2025 – Scenoje kartu su Belphegor, Night Slasher ir Black Spikes, Pramogų salė Vakaris, Vilnius, 2025-03-29.",
        "Zobens un Lēmes 2024 – Anapilin pasirodė šiame prestižiniame metalų festivalyje Latvijoje, kartu su Samael, Thyrfing ir Metsatöll.",
        "Howls of Winter XII (2025) – Grupė dalyvavo šiame underground juodojo metalo festivalyje Taline, Estijoje, kartu su Abduction, izrod, Lunar Mantra ir Sargeist.",
        "Velniava'2025 – Anapilin pasirodė Vilniuje, kartu su God Dethroned, Night Slasher ir Black Spikes.",
        "Misþyrming koncertas – 2020 m. kovo 10 d. Anapilin pasirodė su islandų grupe Misþyrming Vilniaus klube „Narauti“.",
        "Akhlys koncertas – 2023 m. gruodžio 3 d. Anapilin pasirodė su amerikiečių grupe Akhlys Vilniaus klube „nArauti“.",
    ],
    'discography': [
        { 'name': 'Krachas', 'type': 'EP', 'year': 2019 },
        { 'name': 'Neganda', 'type': 'Singlas', 'year': 2020 },
        { 'name': 'Urvas', 'type': 'Demo', 'year': 2020 },
        { 'name': 'Dezintegracija', 'type': 'Pilnas albumas', 'year': 2021 },
        { 'name': 'Pabaiga', 'type': 'Singlas', 'year': 2022 },
        { 'name': 'Tuščia erdvė', 'type': 'Singlas', 'year': 2023 },
        { 'name': 'Breaking the Fourth Wall', 'type': 'Singlas', 'year': 2024 },
        { 'name': 'Applause in an Empty Theater', 'type': 'Singlas', 'year': 2024 },
        { 'name': 'Anapilin', 'type': 'EP', 'year': 2024 },
    ],
}

members = [
    {
        'name': 'Sandžėjus Sankaras',
        'role': 'Guitars (lead)',
        'years': '2016-present',
        'bio': {
            'en': 'Sandžėjus is the founding guitarist of Anapilin, shaping the band’s melodic and atmospheric sound with his creative vision.',
            'lt': 'Sandžėjus yra pagrindinis „Anapilin“ gitaristas, kurio kūrybinė vizija formuoja grupės melodingą ir atmosferinį skambesį.'
        },
    },
    {
        'name': 'Simonas Bložis',
        'role': 'Vocals, Guitars (rhythm)',
        'years': '2016-present',
        'bio': {
            'en': 'Simonas brings haunting vocals and solid rhythm guitar, contributing poetic lyrics and emotional depth.',
            'lt': 'Simonas suteikia grupės muzikai užburiančius vokalus ir tvirtą ritmo gitarą, prisideda poetiškais tekstais ir emociniu gilumu.'
        },
    },
    {
        'name': 'Aurimas Krivinskas',
        'role': 'Bass',
        'years': '2023-present',
        'bio': {
            'en': 'Aurimas joined Anapilin in 2023, providing a powerful low-end and dynamic stage presence.',
            'lt': 'Aurimas prisijungė prie „Anapilin“ 2023 m., suteikdamas galingą bosą ir dinamišką sceninį įvaizdį.'
        },
    },
    {
        'name': 'Tauras Jasionis',
        'role': 'Drums',
        'years': '2023-present',
        'bio': {
            'en': 'Tauras’s drumming brings intensity and precision, driving the band’s rhythmic backbone.',
            'lt': 'Tauro būgnavimas suteikia grupei intensyvumo ir preciziškumo, palaiko ritminį pagrindą.'
        },
    },
]

def main(lang='en'):
    if lang == 'lt':
        bi = band_info_lt
    else:
        bi = band_info

    template_html = '''
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>{{ band_info.name }} – EPK</title>
        <style>
            body { font-family: Arial, sans-serif; color: #181818; background: #fff; margin: 0; padding: 0; }
            .container { max-width: 900px; margin: 24px auto; padding: 24px; background: #f6f6f6; border-radius: 12px; }
            h1, h2, h3 { color: #111; }
            .section { margin-bottom: 32px; }
            .socials a { margin-right: 16px; color: #222; text-decoration: none; font-weight: bold; }
            .youtube-link { display: inline-block; margin: 8px 12px 8px 0; color: #c4302b; font-weight: bold; text-decoration: none; }
            .spotify-link { display: inline-block; margin: 8px 12px 8px 0; color: #1db954; font-weight: bold; text-decoration: none; }
            .member-list { display: flex; flex-wrap: wrap; gap: 24px; justify-content: flex-start; }
            .member-card { flex: 1 1 220px; background: #fff; border-radius: 8px; padding: 16px; box-shadow: 0 2px 8px #0001; text-align: left; min-width: 220px; max-width: 300px; }
            .member-card b { font-size: 1.05em; }
            .member-card .role { font-size: 1em; color: #333; margin-bottom: 2px; }
            .member-card .years { font-size: 12px; color: #666; margin-bottom: 8px; }
            .member-card .bio { font-style: italic; font-size: 13px; color: #222; }
            .performances ul { padding-left: 20px; }
            .discography-list { list-style: none; padding: 0; }
            .discography-list li { margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #e0e0e0; }
            .discography-list .release-title { font-weight: bold; }
            .discography-list .release-type, .discography-list .release-year { color: #555; font-size: 0.96em; margin-left: 8px; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>{{ band_info.name }}</h1>
            <h3>{{ band_info.genre }} | {{ band_info.origin }} | Formed: {{ band_info.formed }}</h3>
            <div class="section">
                <b>Contact:</b> {{ band_info.contact }}<br/>
                <div class="socials" style="margin-top: 8px;">
                    {% for s in band_info.socials %}
                    <a href="{{ s.url }}">{{ s.name }}</a>
                    {% endfor %}
                </div>
                <div style="margin-top: 10px;">
                    <a href="https://www.youtube.com/@anapilin8918" class="youtube-link">YouTube Channel</a>
                    <a href="https://www.youtube.com/embed/TjxGT0yPGPM" class="youtube-link">Main Video</a>
                    <a href="https://www.youtube.com/embed/Uqqmwaj7i64?start=317" class="youtube-link">Live Video</a>
                    <a href="https://open.spotify.com/artist/4Z9kXl5h5wF1wZlYyQqQ1R" class="spotify-link">Spotify</a>
                </div>
            </div>
            <div class="section">
                <p style="font-style: italic; font-size: 1.08em; margin-bottom: 0;">{{ band_info.bio }}</p>
            </div>
            <div class="section">
                <h2 style="margin-bottom: 12px;">Band Members</h2>
                <div class="member-list">
                    {% for m in members %}
                    <div class="member-card">
                        <b>{{ m.name }}</b>
                        <div class="role">{{ m.role }}</div>
                        <div class="years">{{ m.years }}</div>
                        <div class="bio">{{ m.bio[lang] }}</div>
                    </div>
                    {% endfor %}
                </div>
            </div>
            <div class="section">
                <h2 style="margin-bottom: 12px;">Notable Performances</h2>
                <ul>
                {% for perf in band_info.performances %}
                    <li>{{ perf }}</li>
                {% endfor %}
                </ul>
            </div>
            <div class="section">
                <h2 style="margin-bottom: 12px;">Discography</h2>
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

    context = {
        "band_info": bi,
        "members": members,
        "lang": lang,
    }
    from jinja2 import Environment
    jinja_env = Environment()
    jinja_env.block_start_string = '{%'
    jinja_env.block_end_string = '%}'
    jinja_env.variable_start_string = '{{'
    jinja_env.variable_end_string = '}}'
    jinja_env.comment_start_string = '{#'
    jinja_env.comment_end_string = '#}'
    html = jinja_env.from_string(template_html).render(**context)
    temp_html = f"epk_temp_{lang}.html"
    with open(temp_html, 'w', encoding='utf-8') as f:
        f.write(html)
    pdfkit.from_file(temp_html, f"Anapilin-EPK-{lang}.pdf")
    os.remove(temp_html)

if __name__ == "__main__":
    main('en')
    main('lt')
