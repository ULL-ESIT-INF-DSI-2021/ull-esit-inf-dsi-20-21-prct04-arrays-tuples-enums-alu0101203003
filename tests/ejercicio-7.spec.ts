import 'mocha';
import {expect} from 'chai';
import {suma} from '../src/ejercicio-7';
import {resta} from '../src/ejercicio-7';
import {producto} from '../src/ejercicio-7';
import {distEuclidea} from '../src/ejercicio-7';

describe('Ejercicio 7', () => {
    it('suma([1,4,3],[-3,6,1]) returns [-2,10]', () => {
      expect(suma([1,4,3],[-3,6,1])).to.be.deep.equal([-2,10,4]);
    });
    it('suma([1,4,3],[-3,6,1]) returns [-2,10]', () => {
        expect(suma([1,4,3],[-3,6,1,4,2])).to.be.deep.equal("Error. Puntos con distinto numero de coordenadas");
      });
    it('resta([1,4,3,1],[-3,6,1,2]) returns [4,-2,2,-1]', () => {
        expect(resta([1,4,3,1],[-3,6,1,2])).to.be.deep.equal([4,-2,2,-1]);
      });
    it('producto([1,4,3],2) returns [2,8,6]', () => {
      expect(producto([1,4,3],2)).to.be.deep.equal([2,8,6]);
    });
    it('distEuclidea([2,2,8],[2,4,8]) returns 2', () => {
        expect(distEuclidea([2,2,8],[2,4,8])).to.be.deep.equal(2);
      });

});