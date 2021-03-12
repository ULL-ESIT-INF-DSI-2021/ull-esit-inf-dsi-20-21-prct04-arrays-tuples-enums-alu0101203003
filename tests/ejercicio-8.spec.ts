import 'mocha';
import {expect} from 'chai';
import {agent} from '../src/ejercicio-8';

describe('Ejercicio 8', () => {
    it('agent(4,4,[0,0],[3,3]) returns ["South","South","South","East","East","East"]', () => {
      expect(agent(4,4,[0,0],[3,3])).to.be.deep.equal(["South","South","South","East","East","East"]);
    });
    it('agent(6,5,[4,3],[1,0]) returns ["North","North","North","West","West","West"]', () => {
        expect(agent(4,4,[0,0],[3,3])).to.be.deep.equal(["North","North","North","West","West","West"]);
    });
});