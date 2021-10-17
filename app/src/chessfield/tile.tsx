import React from 'react'

export enum Style {
  White,
  Black
}

interface TileProps {
  style: Style
  shadow: boolean
}

const WHITE_TILE_COLOR = "bg-gray-300"
const WHITE_TILE_BRIGHTSIDE = "bg-gray-400"
const WHITE_TILE_DARKSIDE = "bg-gray-500"
const WHITE_TILE_SHADOW = "bg-gray-500"

const BLACK_TILE_COLOR = "bg-gray-800"
const BLACK_TILE_BRIGHTSIDE = "bg-gray-900"
const BLACK_TILE_DARKSIDE = "bg-black"
const BLACK_TILE_SHADOW = "bg-gray-800"

export default function Tile(props: TileProps) {
  return (
    <div className="relative scale-y-50 translate-x-4 translate-y-2.5">
      <div className={"absolute z-20 w-20 h-20 rotate-45 " + (props.style === Style.White ? WHITE_TILE_COLOR : BLACK_TILE_COLOR)} />
      <div className={
        "z-10 h-10 w-14 skew-y-[45deg] absolute translate-y-[4.25rem] -translate-x-4 " + 
        (props.style === Style.White ? WHITE_TILE_DARKSIDE : BLACK_TILE_DARKSIDE)
      } />
      <div className={
        "z-10 h-10 w-14 skew-y-[-45deg] absolute translate-y-[4.25rem] translate-x-10 " + 
        (props.style === Style.White ? WHITE_TILE_BRIGHTSIDE : BLACK_TILE_BRIGHTSIDE)
      } />
      {props.shadow &&
        <div className={
          "absolute z-0 w-20 h-20 rotate-45 translate translate-y-16 filter blur-lg " + 
          (props.style === Style.White ? WHITE_TILE_SHADOW : BLACK_TILE_SHADOW)
        } />
      }
    </div>
  )
}
