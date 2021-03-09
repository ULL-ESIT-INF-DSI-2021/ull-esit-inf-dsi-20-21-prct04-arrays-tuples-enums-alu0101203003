import 'mocha';
import {expect} from 'chai';
import {prueba} from '../src/ejercicio-1';

describe('prueba function tests', () => {
    it('prueba("prueba") returns "prueba"', () => {
      expect(prueba("prueba")).to.be.equal("prueba");
    });

    it('prueba("hola") returns "hola"', () => {
        expect(prueba("hola")).to.be.equal("hola");
      });
});