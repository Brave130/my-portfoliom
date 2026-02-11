
---
title: "Procedural Terrain Engine"
description: "An infite world generator made in 1 day similar to minecraft it gives biomes seas and mountains i will add more if someone wants it."
tech: ["Luau", "Roblox", "Vector Math"]
videoUrl: "/videos/Test.mp4"
---

### Technical Deep Dive
Developed a custom terrain solution in Roblox that bypasses standard limitations through efficient chunk management.

- **Noisy Terrain:** Leveraged 2D and 3D Perlin Noise to generate heightmaps for mountains and depth for lakes.
- **Dynamic Chunk Loading:** Implemented a custom system to load/unload terrain based on player position to keep memory usage low.
- **Greedy Meshing / Optimization:** Optimized part count by merging adjacent static objects, significantly reducing the draw call overhead.
- **Procedural Distribution:** Algorithm-based placement of trees, rocks, and structures using Poisson Disk Sampling for natural-looking density.