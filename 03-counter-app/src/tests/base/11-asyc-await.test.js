import { getImagen } from "../../base/11-async-await"

describe('Pruebasen 11 con async y fetch', () => { 
    
    test('should return img url', async() => { 
        
        const url = await getImagen();
        expect( typeof url ).toBe('string')

        expect( url.includes("https://") ).toBe( true )

     })

 })