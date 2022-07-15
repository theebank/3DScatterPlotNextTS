# Requires @react-three/fiber & @react-three/drei
# How to Implement:
    - Import component from 'pages/components/Graph/Graph.tsx' and then place it wherever desired 
    - One Prop: points 2d array of type any[][]. 
    - Requires data be passed in order and format as found in 'pages/components/Graph/CoordinateFormat.png' but in array format. Ex: 2A9 = [2,'A',9] if the level is the top(T) pass as 'T'

## Styling the component:
    - All CSS is located in 'pages/components/Graph/Graph.module.css'
    - .Scene controls the entire component (reset cam btn included)
    - .Canvas controls the canvas on which the graph is placed (leave as 100vh and 100vw to ensure it takes the entire allocated space of the scene)


## To change the color of the points: 
    1. Go to: 'pages/components/Graph/Points/Point.tsx'
    2. Modify Line 45 
        <meshStandardMaterial color={hovered ? 'red' : 'blue'} />

## To change the color of the plane:
    1. Go to: 'pages/components/Graph/Grid/Grid.tsx'
    2. Modify Lines 41,79,110
        <meshStandardMaterial color={'rgb(181, 208, 232)'} />

## To change the color of grid on plane:
    1. Go to: 'pages/components/Graph/Grid/Grid.tsx'
    2. Modify Lines 28, 34, 67, 73, 97, 103
        args = {[90,8,0xFFFFFF,0xFFFFFF]}



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
