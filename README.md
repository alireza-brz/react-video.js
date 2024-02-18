# react-video.js 🎥🚀

**react-video.js** is like a friendly neighbor who knows all about **video.js** and is here to lend a helping hand. It's not flashy like a superhero, but it gets the job done. 🎬

## What's the Scoop? 🍦

Imagine this: You're building a React app, and suddenly, you need video playback. Enter **react-video.js**! It's like having a backstage pass to the video.js concert. 🎵

## Installation Made Easy 🛠️

Whether you prefer yarn or npm, we've got you covered:

```bash
# Use yarn (because it's chill)
yarn add @alireza-brz/react-video.js

# Or use npm (because it's classic)
npm install @alireza-brz/react-video.js

```

## Showtime! 🎟️

Here’s a snippet from our laid-back React script:


```javascript
import React from 'react';
import { ReactVideoJs, VideoJsOptions } from '@alireza-brz/react-video.js';

function MyVideo() {
  const videoJsOptions: VideoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: 'https://pixabay.com/videos/download/video-40456_large.mp4',
        type: 'video/mp4',
      },
    ],
    autoSetup: true,
  };

  const handlePlayerReady = (player) => {
    // You can handle player events here, for example:
    player.on('waiting', () => {
      console.log('🍿 Player is waiting');
    });

    player.on('dispose', () => {
      console.log('🎬 Player will dispose');
    });
  };

  return (
    <div
      style={{
        width: '500px',
        height: '500px',
      }}
    >
      <ReactVideoJs options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default MyVideo;
```

## Linking to video.js 🎬

React-Video.js is like the peanut butter to video.js’s jelly! 🥪 It’s built on top of the video.js library, making it the ultimate duo for video playback in your React apps. 🎥

For more information, behind-the-scenes gossip, and secret handshakes, head over to the video.js project page. 🕵️‍♂️


## Contributing 🚀

We’re all about community vibes! If you want to sprinkle some magic into React-Video.js, follow these steps:

- Fork the repository and clone it to your local machine.
- Create a new branch for your feature or bug fix. Call it something cool, like “moonwalk-feature” or “bug-buster.”
- Make your changes and test them thoroughly. No half-baked cookies here!
- Ensure that your code follows the project’s coding standards. We’re sticklers for neatness.
- Commit your changes and push them to your fork. 🚀
- Submit a pull request to the main repository, explaining your changes. Bonus points for using emojis! 🌟

Feel free to join our cosmic coding party! 🎉 If you have questions, just holler. 🙌😎

Grab your favorite snack, dim the lights, and enjoy the show! 🍿🎥

Feel free to adjust the chill factor as needed! If you have any questions, just holler. 🙌😎

Remember to adjust the popcorn-to-code ratio as needed! If you need more enchantments, just wave your wand (or keyboard). 😉🔮


## Apache 2 License 📜

React-Video.js is licensed under the Apache License 2.0. It’s like giving your code a passport to the open-source world! 🌎✨
