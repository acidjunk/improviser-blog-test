---
author: "acidjunk"
path: "/blogs/architecture-of-lessons-modules"
title: "Lesson module architecture"
date: 2020-06-19T01:33:46+10:00
image: "architecture-of-lessons-modules.png"
---

The lessons module will be the main work horse of the platform. To organize my thoughts and to 
increase the SEO ranking of the iMproviser I will write some blog posts about the design process.

## Architecture of the iMproviser lessons modules

Currently the iMproviser provides functionality to use riffs to create exercises. When the chord 
changes in the exercise match with one of our backing tracks, you will be able to see and play the 
backing tracks. 

The lessons module will function as an easy entry point to exercises and riffs. These are the core epic 
building blocks:

1. A blog platform that will be used for SEO friendly landing pages that guide users to lessons
2. Functionality to easily build lessons consisting out of the following snippets: text, riffs, exercises, 
videos, scales and audio tracks
3. A user UI that let's you selects lessons, with the ability to track your own progress
4. Permission system changes so teachers can use the platform more easily and keep track of students progress

Work for items 1 and 2 is currently ongoing. A small proof of concept, focusing on the blog, is already online 
but it still lacks "dynamic" content. It will be tested in the upcoming weeks with some short blog entries about 
improvisation tips.

The API backend will have an extra REST endpoint for the lessons which will be responsible 
for the viewing of lessons. When a teacher adds a lesson he/she can also automatically show the content on the 
blog platform. This will also expose some of the "meta" content of riffs and exercises to unauthenticated blog users.
Users can easily navigate to the iMproviser main platform, log in, when they want to interact with a lesson. This 
should ensure maximum SEO efficacy.
