import '@testing-library/jest-dom/extend-expect';


//import Enzyme from 'enzyme';
//import Adapter from 'enzyme-adapter-react-17';
//..import {createSerializer} from 'enzyme-to-json';

//Enzyme.configure({ adapter: new Adapter() });



//expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


const Environment = require('jest-environment-jsdom-global');
/**
 * A custom environment to set the TextEncoder
 */
module.exports = class CustomTestEnvironment extends Environment {
    constructor({ globalConfig, projectConfig }, context) {
        super({ globalConfig, projectConfig }, context);
        if (typeof this.global.TextEncoder === 'undefined') {
            const { TextEncoder } = require('util');
            this.global.TextEncoder = TextEncoder;
        }
    }
};

