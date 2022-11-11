import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroById = (id) => {
    //Si existe lo regresa y si no existe regresa undefined
  return heroes.find(hero=>hero.id===id)
}
