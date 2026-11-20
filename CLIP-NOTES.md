# Clip Notes — gta6-clipper-01

## Source video

- **Title:** GTA VI SIAP TAMAT 100%.... GAMEPLAY #1
- **Channel:** Windah Basudara
- **Video ID:** 45r3OyaxvFE
- **URL:** https://www.youtube.com/watch?v=45r3OyaxvFE
- **Published:** 18 Nov 2026 · **Length:** 4:03:51 · ~12.4M views at research time

## How the moment was chosen (evidence)

1. Downloaded the VOD's full audio track and computed a per-second loudness
   (RMS) curve over all 14,631 seconds, plus downloaded the Indonesian
   auto-captions and mined them for reaction markers (`[berteriak]` = scream,
   `[tertawa]` = laugh) and keywords (mati, nyolong, nabrak, polisi, …).
2. The single loudest sustained passage of the entire 4-hour stream is the
   shootout that ends at **00:38:28–00:38:45**: highest 10s/20s/30s rolling-RMS
   windows of the VOD all sit there (20s mean RMS 0.514 vs stream median 0.269).
3. Caption evidence built the story: at 00:34:02 Windah asks *"Gua orang
   pertama yang mati kah nanti?"* ("Am I going to be the first person to
   die?"), viewers then beg him to test dying (00:37:36), and at 00:38:28 he
   reviews the death animation — because it is his own.
4. Downloaded the video section and verified frame by frame: Jason fights at
   critical health behind a porta-potty, flanks ("gua flank dia… Let's go!"),
   **collapses dead at 00:38:28**, the full-screen red **WASTED** lands at
   00:38:30, Windah points at the camera, screams (caption marker 00:38:44)
   and bursts out laughing into the respawn fade. This is his **first death
   of the stream** — the iconic moment, in front of a live audience he later
   said peaked at ~120,000 viewers.

### Runner-up candidates (researched, not used)

| Window (VOD) | Moment | Why it lost |
|---|---|---|
| 02:40:42–02:43:25 | Police chase in a taxi: wreck, "mekanik ketangkap polisi", 5 screams, car swap | Great chaos, verified on video, but no single iconic payoff frame like WASTED |
| 00:18:11–00:18:41 | First taxi robbery ("gua akan ngerampok taksi ini, Bro") | Charming, but loudness is mostly music; smaller reaction |
| 01:28:50–01:29:57 | Sneaking into a police station to steal a red Imponte | Fun premise, mostly talk, low loudness |
| 00:10:52–00:11:13 | Loudest single second of the VOD (RMS max) | Loudness is a game cutscene/music peak, not a Windah reaction |

## Chosen moment

- **VOD window used:** 00:38:10 → 00:38:47 (37 s)
- Death at 00:38:28 · WASTED screen 00:38:30 · scream 00:38:44 · laugh into fade-out

## Final clip — `clip.mp4`

- **Format:** 1080×1920 (9:16), H.264 + AAC, 60 fps, **42.0 s** total, ~32.6 MB
- **Layout (split screen, the standard streamer-Shorts format):** gameplay
  crop on top (1080×968), Windah's facecam cropped from the stream's
  bottom-right corner and scaled big below (1080×952) so his reactions stay
  fully visible the whole clip — a plain centre crop would have cut out both
  Jason (left-of-frame in this fight) and the facecam.
- **Structure:**
  - 0:00–0:05 — hook text burned in, all caps: **"WINDAH MATI PERTAMA KALI /
    DI GTA 6!!"** over the already-running gunfight
  - 0:00–0:37 — the moment: cover shootout at critical health → flank charge
    → his death → WASTED screen → point-at-camera, scream and laugh
    (audio loudness-normalised to −14 LUFS)
  - 0:37–0:42 — pitch end-card over the frozen final frame:
    **"Bikin clip kayak gini pake AI, dapet duit beneran di make.fun"** +
    **"make.fun/bounty/gta6-clipper-01"**
- Production notes: yt-dlp section downloads of this VOD carry a +10 s
  lead-in and only ~41 s of embedded audio, so the section's true offset was
  pinned by cross-correlating its audio against the full-VOD track
  (r = 0.993 at VOD 00:33:30) and the clip's audio was taken from the
  full-VOD track at the exact same VOD timestamps. No TTS was used for the
  pitch (no TTS engine installed); the pitch is carried as on-screen text.

## Sync fix (20 Nov 2026, after viewer report "audio tidak sync")

**Measured defect: the audio was exactly +20.000 s AHEAD of the video**
(you heard each moment ~20 s before you saw it; no drift, offset only).

How it was measured:
- Cross-correlating the old clip's audio against the full-VOD track placed
  its start at **VOD 00:38:30.000** (r = 0.991) — not the intended 00:38:10.
- The video side was anchored independently: `segment.mp4` frame-matches
  `candA_death.webm` at offset 280.50 s (6/6 test frames), the WASTED
  red-wash switches on at segment t ∈ (19.90, 20.00], and the sharpest
  envelope step in the VOD audio (the WASTED sting) sits at VOD 2309.94 s —
  19.95 s of video + a 2290.00 s start lands on it exactly. Every
  caption-timed speech beat ("gua flank dia" 2301.9, "animasi matinya…"
  2311.8, "Ciri khas GTA wasted" 2314.0) also lines up with the facecam
  only under a 00:38:10 video start. So the video was always right; only
  the audio was cut from the wrong place.

**Cause:** the final render (`filter3.txt`) fed the audio from a separate
input — the full-VOD track — starting at **00:38:30, the WASTED timestamp**,
instead of the window start 00:38:10 (a clean 20.000 s seek slip on the
audio input; the section's own broken 41 s audio track was not involved).

**Correction:** re-rendered with the identical filter graph, layout, hook
text, pitch card, loudnorm (−14 LUFS) and 42.0 s duration — the only change
is the audio input, now cut from the VOD track at **00:38:10 → 00:38:47**
(silence under the pitch card, as before).

**Verification of the fixed `clip.mp4` (objective, not eyeballed):**
- Cross-correlation of the new clip's audio vs the full-VOD track: starts
  at **VOD 2290.000 s, r = 0.998 → residual offset +0.000 s** (< 0.1 s req).
- WASTED: audio sting (sharpest envelope step) at clip **t = 19.94 s**;
  visual red-wash onset at clip **t ≈ 19.95–20.05 s** → Δ ≈ 0.0–0.1 s.
- Scream burst (the `[berteriak]` shout): audio onset at clip **t = 35.03 s**
  (dip 34.91, peak 35.13) vs VOD-mapped expectation 34.97 s → Δ = 0.06 s,
  landing on the barn NPC-fight beat visible at t ≈ 35.0.
- Structure unchanged: 1080×1920, 60 fps, 42.0 s, hook 0–5 s, pitch card
  37–42 s over silence (tail RMS 0.00001).

## Proposed YouTube title

DETIK-DETIK WINDAH MATI PERTAMA KALI DI GTA 6!! 😱 FIRST WASTED GTA VI

## Proposed YouTube description

WINDAH MATI PERTAMA KALI DI GTA 6!! 😱🔥

Stream GTA VI Windah Basudara ditonton sampai 120.000 orang LIVE — dan ini momen yang paling ditunggu: WASTED PERTAMA KALI! Awalnya sok-sokan mau flank musuh, endingnya malah tumbang sendiri 🤣

Menurut kalian ini mati paling kocak atau paling nyesek di GTA 6 sejauh ini?

🎬 Full stream: "GTA VI SIAP TAMAT 100%.... GAMEPLAY #1" di channel Windah Basudara
https://www.youtube.com/watch?v=45r3OyaxvFE

#GTA6 #GTAVI #WindahBasudara #Wasted #Shorts #GamingIndonesia

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

makefun-string-sugar-basil
