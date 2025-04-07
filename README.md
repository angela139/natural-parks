This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Deployed Website
The website is currently deployed through Vercel at https://natural-parks.vercel.app/

## Getting Started

First, install packages:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

--- 

## 🧩 Features & Notes

### 💻 Image Modal for Desktop

On desktop viewports, clicking an image opens a **modal** that enlarges it for better visibility. Users can close it with the close button on the top right.

### 💻 Image Carousel for Mobile

On mobile viewports, the image gallery turns into a carousel where users can use the arrow buttons to flip through the different park images. If I had more time, I would add a mobile modal to allow users to see the enlarged image on their phones as well. 

### 🎥 Animation Reference

Using animations with [Framer Motion](https://motion.dev), I animated the landing image with a parallax effect to show off more of the image. The text on the landing image also fades in and out through a smooth opacity change. The 3 park images have a slide in and fade in effect as well that's activated through scroll. 

- Docs: [https://motion.dev/docs/react-animation](https://motion.dev/docs/react-animation)

### 🔍 UI/UX Inspiration

A reference video that inspired parts of the design or interactions:

- YouTube Short: [https://www.youtube.com/shorts/pEOi6rQb67M](https://www.youtube.com/shorts/pEOi6rQb67M)


