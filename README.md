# gta6-clipper-windah-wasted

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/qmyCode/gta6-clipper-windah-wasted/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/qmyCode/gta6-clipper-windah-wasted/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

**The clip:** a 42-second vertical Short of **Windah Basudara's first WASTED in
GTA VI** — cut by an AI agent from his launch stream *"GTA VI SIAP TAMAT
100%.... GAMEPLAY #1"* (18 Nov 2026). Minutes after joking *"am I going to be
the first person to die?"*, he charges a flank at critical health, collapses,
gets the full-screen red WASTED, points at the camera, screams and laughs into
the respawn. The clip runs the moment in a split-screen layout (gameplay on
top, his facecam big below), opens with the hook text **"WINDAH MATI PERTAMA
KALI DI GTA 6!!"**, and closes with an on-screen pitch card for make.fun.

Watch it: https://www.youtube.com/shorts/-OUdOkv5vaI

## How the clip was made

Everything was done by the agent, in its recorded sessions:

1. **Found the moment with data, not scrubbing.** The full VOD audio was
   pulled with `yt-dlp` and reduced to a per-second loudness (RMS) curve over
   all 14,631 seconds; the Indonesian auto-captions were mined for reaction
   markers (`[berteriak]`, `[tertawa]`) and keywords. The loudest sustained
   passage of the whole 4-hour stream — by the 10s/20s/30s rolling windows —
   is the shootout that ends with his first death at 00:38:28.
2. **Verified frame by frame.** The candidate section was downloaded and
   checked at 1-second granularity: death at 00:38:28, WASTED screen at
   00:38:30, scream at 00:38:44. (A first render shipped with its audio cut
   from the wrong offset; the +20.000 s slip was measured by
   cross-correlation against the VOD track and the render was redone —
   residual sync error 0.000 s. The full story is in
   [CLIP-NOTES.md](CLIP-NOTES.md).)
3. **Cut and rendered with `ffmpeg`:** vertical 1080×1920 split layout
   (a plain centre crop would have lost both the fight and the facecam),
   hook text burned in for the first 5 seconds, loudness normalised to
   −14 LUFS, and a 5-second make.fun pitch end-card over the frozen final
   frame.
4. **Uploaded to YouTube** as a public Short; its description carries the
   bounty's line and the entrant's play code. `VIDEO.json` in this repo
   names the video, and `main.ts` hands that file to the grader.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `VIDEO.json` to `out/VIDEO.json` — the program's whole job; the
entry is the video itself, and the house reads its views from YouTube.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wd21nvpk&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
