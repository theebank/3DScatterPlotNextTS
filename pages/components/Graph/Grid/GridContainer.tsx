import React from 'react'
import type { NextPage } from 'next'
import Grid from './Grid'

interface gridContainerProps{
    flipx: 1|-1,
    flipy: 1|-1,
    flipz: 1|-1,
    getCoords: (min: number, max: number, offset: number) => number[]
}

const GridContainer: NextPage<gridContainerProps> = ({flipx,flipy,flipz,getCoords}) => {
  return (
    <>
        <Grid axis = 'depth' flipaxis={flipz} fliplabel = {flipy} getCoords = {getCoords}/>
        <Grid axis = 'vertical' flipaxis={flipx} fliplabel = {flipz} getCoords = {getCoords}/>
        <Grid axis = 'horizontal' flipaxis={flipy} fliplabel = {flipx} getCoords = {getCoords}/>
               
    </>
  )
}

export default GridContainer