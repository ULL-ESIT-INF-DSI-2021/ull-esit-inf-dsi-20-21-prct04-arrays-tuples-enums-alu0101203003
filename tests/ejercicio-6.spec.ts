import 'mocha';
import {expect} from 'chai';
import {suma} from '../src/ejercicio-6';
import {resta} from '../src/ejercicio-6';
import {producto} from '../src/ejercicio-6';
import {distEuclidea} from '../src/ejercicio-6';

describe('Ejercicio 6', () => {
    it('suma([1,4],[-3,6]) returns [-2,10]', () => {
      expect(suma([1,4],[-3,6])).to.be.deep.equal([-2,10]);
    });
    it('resta([1,4],[-3,6]) returns [4,-2]', () => {
        expect(resta([1,4],[-3,6])).to.be.deep.equal([4,-2]);
      });
    it('producto([1,4],2) returns [2,8]', () => {
      expect(producto([1,4],2)).to.be.deep.equal([2,8]);
    });
    it('distEuclidea([2,2],[2,4]) returns 2', () => {
        expect(distEuclidea([2,2],[2,4])).to.be.deep.equal(2);
      });

});