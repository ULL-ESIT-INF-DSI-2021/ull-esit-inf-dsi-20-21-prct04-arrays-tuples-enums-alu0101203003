import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-2';

describe('Ejercicio 2', () => {
    it('meshArray(["allow", "lowering", "ringmaster", "terror"]) returns "lowringter"', () => {
      expect(meshArray(["allow", "lowering", "ringmaster", "terror"])).to.be.deep.equal("lowringter");
    });

    it('meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"]) returns "Error al encadenar"', () => {
      expect(meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"])).to.be.deep.equal("Error al encadenar");
    })
});