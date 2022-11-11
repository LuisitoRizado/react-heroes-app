import { heroes } from "../data/heroes";
import { Heroe } from "../pages/Heroe";
//Creamos funcion que filtra si el publisher existe o no

export const getHeroesByPublisher = (publisher) =>{
    //Solo tenemos 2 publisher permitidos
    //Dc y marvel

    const valuePublisher = ['DC Comics','Marvel Comics'];
    if(!valuePublisher.includes(publisher)){
        throw new Error('El publisher no es valido')
    }
    else{
        return heroes.filter(heroe => heroe.publisher===publisher);
    }
}