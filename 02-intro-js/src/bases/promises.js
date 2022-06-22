import { getHeroeById } from "./bases/exports-import";

/*const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        console.log('2 segundos');
        
        const heroe = getHeroeById(2);

        resolve();
    }, 2000);
} ); 
promesa.then( () => {
    console.log('then')
} )
.catch( err => console.warn( err ) ) */
const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('2 segundos');
            
            const heroe = getHeroeById(2);
            
            if (heroe) {
                resolve(heroe);
            } else {
                reject('NO se encontro');
            }
        }, 2000);
    } );
}
getHeroeByIdAsync(1)

