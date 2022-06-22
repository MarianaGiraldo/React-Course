import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => { 
    
    test('Retorna heroue async', ( done ) => { 
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( 
                heroe => {
                    expect( heroe ).toBe( heroes[0] )
                    done();
                }
            )

     })

     //test('Retorna un error si el heroe no existe', ( done ) => { 
        
        //const id = 1;

        /*getHeroeByIdAsync( id )
            .catch( error => {
                    expect( error ).toBe( "No se puede encontrar el héroe" )
                    done();
                }
            )*/

     //})

 })