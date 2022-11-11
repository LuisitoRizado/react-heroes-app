import React from 'react'
import { HeroList } from '../componentes'

export const DcPage = () => {
  return (
    <div>
        <h1>Dc comics</h1>
        <hr />
        <ul>
         <HeroList publisher='DC Comics'/>
        </ul>
    </div>
  )
}
