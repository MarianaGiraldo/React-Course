import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en Template String', () => {
    
    test('getSaludo debe retornar Hola Fernando', () => { 
        const nombre   = 'Fernando';

        const saludo = getSaludo( nombre )

        expect( saludo ).toBe('Hola ' + nombre)

     })

});
