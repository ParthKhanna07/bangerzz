# 🎵 Bangerzz

A cozy little corner of the internet that plays banger 90s Bollywood songs — the kind that hit at every Indian barber shop and city bus, exactly when you least expect it.

**🔴 Live: [bangerzz.vercel.app](https://bangerzz.vercel.app)**

## What is this?

Two hand-picked YouTube playlists, wrapped in a full-screen digital-art scene, with a minimal music player that just works:

- 🪒 **Salon** — a roadside Indian barbershop, chai stall and all
- 🚌 **Bus** — the view from inside a crowded city bus

Toggle between the two scenes anytime, and the background, playlist, and now-playing art all switch with it.

## Features

- Full-screen scene art with a live clock
- Custom player: play/pause, next/prev, click-to-seek progress bar
- Spinning vinyl-style album art synced to the current track
- Auto-skips any track that's blocked from embedding, so the music never just stops
- Responsive layout tuned for both desktop and mobile

## Tech

Plain HTML/CSS/JS — no framework, no build step. Music playback runs on the [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference), driven explicitly per track (rather than YouTube's native playlist mode, which turned out to be unreliable for this).

## Running locally

```bash
python3 -m http.server 8420
```

Then open `http://localhost:8420`.

## Deploying

Deployed on [Vercel](https://vercel.com), auto-deploying on every push to `main`.

```bash
vercel --prod
```

---

Made for anyone who's ever gotten a haircut to the sound of a scratchy 90s cassette playing in the background.

Built and maintained by [ParthKhanna07](https://github.com/ParthKhanna07).
