# Vendy Deník – Project Status
*Montana Dream | vendy-denik.herokuapp.com*

## Hotovo ✓
- Záznamy (trénink, kování, očkování, veterinář)
- Připomínky s barevnými indikátory (zelená / oranžová / červená)
- Historie podle kategorie (5 záznamů + zobraz vše)
- Profil s daty o Vendy vč. odkazu na Jockey Club
- Změna fotky přímo v apce
- PWA – přidat na plochu telefonu
- Push notifikace 7 dní a 1 den předem (8:00)
- Tmavě šedý design

## Možná doladit
- Otec/matka jsou natvrdo v kódu – pokud by chtěla manželka měnit data z telefonu, potřebujeme databázi na Heroku
- Notifikace fungují jen dokud je apka v paměti telefonu – Android je časem zabíjí (omezení prohlížeče)

## Možná přidat
- Fotogalerie (více fotek s datem a popiskem)
- Delší poznámky k záznamu
- Export záznamů do PDF nebo CSV
- Databáze na Heroku (PostgreSQL zdarma) – data přístupná z každého zařízení

## Technický stack
- Frontend: HTML / CSS / JS (Single Page App)
- Backend: Node.js + Express na Heroku
- Data: localStorage (v telefonu/prohlížeči)
- Repo: github.com/VojtaBazala/vendy-denik
- PWA: manifest.json + service worker (sw.js)
