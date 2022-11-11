import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
export const HeroList = ({publisher}) => {
    const heroes = useMemo(()=> getHeroesByPublisher(publisher),[publisher]);

  return (
    <div>
        <div className='row rows-cols-1 row-cols-md g-3'>
        {
            heroes.map(hero=>(
                <HeroCard key={hero.id}
                {...hero}/>
            ))
        }
        </div>
    </div>
  )
}
