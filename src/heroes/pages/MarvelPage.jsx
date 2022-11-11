import React from 'react'
import { HeroList } from '../componentes'
export const MarvelPage = () => {
  return (
    <div>
        <h1>Marvel comics</h1>
        <hr />
        <ul>
         <HeroList publisher='Marvel Comics'/>
        </ul>
    </div>
  )
}
