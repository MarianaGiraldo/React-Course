import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Pruebas Heroes imports and exports', () => { 
    
    test('should return heroe', () => { 
        
        const id = 1;
        const heroe = getHeroeById( id )

        const heroeData = heroes.find( (h) => h.id === id )

        expect( heroe ).toEqual( heroeData );

     })

     test('should retrun undefined if heroe doesnt exist', () => { 
        
        const id = 10;
        const heroe = getHeroeById( id )

        expect( heroe ).toBe( undefined );

     })

     test('should retrun array by owner', () => { 
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner )

        const heroeData = heroes.filter( (h) => h.owner === owner )

        expect( heroes ).toEqual( heroeData );

     })

     test('should retrun array by owner', () => { 
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner )

        const heroeData = heroes.filter( (h) => h.owner === owner )

        expect( heroes.length ).toBe( 2 );

     })

 })