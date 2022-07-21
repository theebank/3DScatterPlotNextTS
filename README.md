# How to setup:
    - Navigate to desired location
    - "git clone git@gitlab.syntronic-can.com:design-house/nordion-3ddosimetryreadsgraph.git"
    - enter folder using "cd nordion-3ddosimetryreadsgraph”

    - *IF NOT MERGED YET*
    - Git checkout Setup/NextTS-with-react-three-fiber

    - npm install

    - To run: 
    - npx next dev  
    - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies:@react-three/fiber@react-three/drei

# How to Implement:
    - run "npm install --save @react-three/fiber @react-three/drei”   
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
