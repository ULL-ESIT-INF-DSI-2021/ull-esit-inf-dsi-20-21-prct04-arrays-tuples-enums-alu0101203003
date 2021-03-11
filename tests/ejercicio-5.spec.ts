import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-5';

describe('Ejercicio 5', () => {
    it('multiplyAll([2, 6, 8])(3) returns [6, 18, 24]', () => {
      expect(multiplyAll([2, 6, 8])(3)).to.be.deep.equal([6, 18, 24]);
    });

});