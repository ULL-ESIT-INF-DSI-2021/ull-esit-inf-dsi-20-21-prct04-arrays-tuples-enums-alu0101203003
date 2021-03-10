import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-1';

describe('Ejercicio 1', () => {
    it('decodeResistor(["Marron","Verde"]) returns value 15', () => {
      expect(decodeResistor(["Marron","Verde"])).to.be.equal('15');
    });

    it('decodeResistor(["Marron","Verde","Violeta"]) returns value 15', () => {
      expect(decodeResistor(["Marron","Verde","Violeta"])).to.be.equal('15');
    });
    it('decodeResistor(["Rojo","Negro"]) returns value 20', () => {
      expect(decodeResistor(["Rojo","Negro"])).to.be.equal('20');
    });
});