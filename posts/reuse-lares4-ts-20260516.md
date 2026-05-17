---
title: Reuse, that is to say, how I retargeted lares4-ts
subtitle: Reuse, how I recycled lares4-ts to power a new product
anchor: /blog/reuse-lares4-ts-20260516
date: 5/16/2026
---

## Reuse: how I recycled lares4-ts to power a new product

A couple of years ago I built [`lares4-ts`](https://github.com/glsorre/lares4-ts) to power a **Homebridge plugin for Ksenia Lares4 security panels**. I maintained the plugin for a while, then someone forked it — and had more free time than me. The fork took off, **I stepped back**, and that was fine.

But the library stayed. Sitting there. Already doing the hard work of speaking the Lares4 WebSocket protocol.

## The problem it was already solving

I didn't want to clone what the fork was doing. So I sat with the question: what else could `lares4-ts` be the foundation for?

The answer came from memory. **Building the library had been genuinely painful**. The Lares4 protocol is chatty, lightly documented, and the only way to understand it is to stare at raw JSON frames scrolling through a terminal. No context, no history, no way to save the connection setup you just typed. Every session starting from scratch.

I'd lived through that. **Anyone integrating with a Lares4 panel was living through the same thing right now**.

## The recycling insight

Reuse isn't just about code. **It's about knowledge**.

When I built `lares4-ts`, I didn't just write a library — I learned the protocol. Which fields matter, how status transitions work, what a malformed frame looks like. **That knowledge doesn't live in the npm package**. It lives in my head. And it's just as reusable as the code.

Before starting something new, ask yourself: where have I already paid the learning cost? What could I build where that cost is already sunk?

For me the answer was obvious. A **proper debug console for the Lares4 protocol**. Not a browser tab, not a script. A real native tool, powered by the library that already knew how to decode every frame.

## What the console is

[`lares4-console`](https://github.com/glsorre/lares4-console) is a **native desktop app** for anyone working with Lares4 panels — integrators, home automation developers, installers debugging a deployment. Connect with IP, PIN, and sender ID, save it as a profile, reconnect with one click next time.

The workspace splits into three panes: a log of every frame, a detail view that pretty-prints whatever you select, and a command pane to send anything back. Frames are decoded through `lares4-ts` — you see named fields and status transitions, not raw JSON. **The console shows you what the protocol means, not just what it says**.

Built on **Tauri 2 and React**. Small binary, no Electron, full light/dark theming. macOS, Windows, Linux.

## What I added on top

The core console is already useful. But with protocol comprehension handled, I had headroom for the workbench layer.

Macros let you sequence and replay commands. Triggers match incoming frames against conditions and fire actions — useful for catching timing-sensitive behavior you'd miss watching manually. Session capture writes every session to SQLite: replay it frame by frame, scrub through it, send the file to someone who can't reach the panel. Annotations let you pin notes to frames so you still have context when reviewing later.

## The takeaway

[`lares4-console`](https://github.com/glsorre/lares4-console) took less time to build than `lares4-ts` did. Not because the console is simpler — it isn't — but because **the protocol was already solved**.

**Your past projects aren't just artifacts**. They're compressed expertise. Look at what you've already built and ask what each one actually knows. Somewhere in there is probably a product waiting to be extracted.