# jp-visser.nl

Persoonlijke website van Janpeter Visser — Software Engineer.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployen naar Vercel

### 1. Push naar GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/JOUW_USERNAME/jp-visser.git
git push -u origin main
```

### 2. Koppel aan Vercel

1. Ga naar [vercel.com/new](https://vercel.com/new)
2. Importeer je GitHub repository
3. Klik op **Deploy** — Vercel detecteert Next.js automatisch

### 3. Domein instellen

1. Ga naar je project in Vercel → **Settings** → **Domains**
2. Voeg `jp-visser.nl` toe
3. Bij je domeinregistrar, stel in:
   - **A-record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`

DNS-wijzigingen kunnen tot 48 uur duren, maar zijn meestal binnen een uur actief.

## Apps toevoegen

Om apps toe te voegen aan de portfolio:

**Optie A — Als aparte Vercel projecten (subdomein):**
- Deploy een app als apart project op Vercel
- Voeg een subdomein toe: bijv. `app1.jp-visser.nl`

**Optie B — Als routes binnen dit project:**
- Maak een nieuwe pagina aan in `app/apps/naam/page.tsx`
- De app is dan bereikbaar op `jp-visser.nl/apps/naam`

Pas daarna `components/apps.tsx` aan om de links naar je apps te tonen.

## Projectstructuur

```
jp-visser/
├── app/
│   ├── globals.css         # Global styles + Tailwind
│   ├── layout.tsx          # Root layout met fonts & metadata
│   └── page.tsx            # Homepage
├── components/
│   ├── nav.tsx             # Navigatie (sticky)
│   ├── hero.tsx            # Hero sectie met portret
│   ├── experience.tsx      # Werkervaring
│   ├── skills.tsx          # Skills & tools
│   ├── apps.tsx            # Apps portfolio
│   ├── contact.tsx         # Contact info
│   ├── footer.tsx          # Footer
│   └── fade-in.tsx         # Scroll-animatie component
├── lib/
│   └── cv-data.ts          # Alle CV data
├── public/
│   └── images/
│       └── portrait.jpg    # Portretfoto
└── package.json
```

## Tech stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Hosted op **Vercel**
