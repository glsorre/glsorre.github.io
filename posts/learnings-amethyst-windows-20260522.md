---
title: What I learnt shipping AmethystWindows to 400 stars — and then archiving it
subtitle: This is what I took away from the whole thing
anchor: /blog/learnings-amethyst-windows-20260522
date: 5/22/2026
---

A few years ago **I built a tiling window manager for Windows 10**, inspired by [Amethyst](https://github.com/ianyh/amethyst). I called it [AmethystWindows](https://github.com/glsorre/amethystwindows). It got **400 stars**, 30 releases, and a small but real community of people who used it daily. Then I archived it. This is what I took away from the whole thing.

## What I built and why
I wanted Amethyst-style automatic tiling on Windows. Nothing good existed at the time, so **I built it myself** — mostly to scratch my own itch, partly to see if I could ship something real. The initial goal was modest: a working prototype that handled the basic layouts. It was my first real experience in the desktop apps world and it had a lot of architectural problems. **Largely experimental but I shipped it anyway**.

## What shipping to a real audience taught me
1. I learned is that **stars don't produce contributors**. Most of your users are silent. They found your tool, it worked, they moved on with their lives — which is exactly what you want. Expecting community in return for a useful free tool is a category error.
2. Issues are product signal, not a todo list. The complaints that kept recurring — edge cases around multi-monitor setups, virtual desktop quirks — **were telling me something about what users actually needed**, not just what was broken. Reading issues as a product person rather than a maintainer changes what you fix first.
3. **Building on platform internals you don't control is a long-term liability** you need to price in from the start. Win32 and DWM are a moving floor. They're not hostile to third-party tools, but they're not built for them either. Every Windows update was a potential regression I hadn't caused and couldn't predict. This wasn't a reason not to build — it was a cost I should have been more explicit with myself about.

## The decision to archive
Windows 11 introduced enough changes to the windowing and DWM internals that keeping AmethystWindows working would have meant rewriting most of the core. I looked at that work honestly — **a significant rewrite of a side project I no longer used daily** — and decided the answer was no.

**That's not failure. That's a decision**. Naming it clearly matters, because the alternative is an unmaintained repo that slowly rots and misleads new users.

## A more recent reflection — on the rise of Ai...
Ai allows developers to explore different areas from the one they are daily involved. Are you a react developer who wants to move into native development? Ai empowers you. Access to documentation, boilerplate and code generation has become free. Sure knowing the coding world still helps. **But for how long?**

What really makes the difference, more than ever, **is knowing you users and understand truly their needs**. I really believe AmethystWindows' primary key of success was this. I recognized a niche (original amwthyst power users constrained to work on windows) and satisfied their needs.

## What carried forward
Almost everything I now believe about building software for power users came from AmethystWindows. **Ship native**. Be **opinionated** — tools that try to please everyone end up with eighteen configuration options and no personality. **Make the default experience good enough that most users never need to touch a setting**. Respect the platform you're building on instead of fighting it.

**Those instincts are in everything I build under [rightright.me now](https://www.rightright.me)**. The surface changes — different platform, different problem — but the underlying model is the same: **a small, sharp tool for a specific kind of user, maintained honestly**.