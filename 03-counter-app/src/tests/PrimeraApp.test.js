import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzi'

describe('Prueba a componente', () => {
    
    test('Debe mostrar el mensaje Hola, soy Mariana', () => {
        
        const saludo = "Hola, soy Mariana";

        const { getByText } = render( <PrimeraApp saludo={ saludo } /> )

        expect( getByText( saludo ) ).toBeInTheDocument();

    });

    test('2 Debe mostrar el mensaje Hola, soy Mariana', () => {
        
        const saludo = "Hola, soy Mariana";
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> )

        //const { getByText } = render( <PrimeraApp saludo={ saludo } /> )

        expect( getByText( saludo ) ).toBeInTheDocument();

    });
    

});
