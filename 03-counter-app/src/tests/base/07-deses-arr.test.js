import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en dese', () => { 
    test('debe retornar un string y un numero', () => { 
        const [letras, numeros] = retornaArreglo()

        expect( [letras, numeros] ).toEqual(['ABC', 123])

        expect( typeof letras ).toEqual('string')

     })
 })