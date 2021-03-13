import 'mocha';
import {expect} from 'chai';
import {agent} from '../src/ejercicio-8';

describe('Ejercicio 8', () => {
    it('agent(4,4,[0,0],[3,3]) returns ["South","East","South","East","South","East"]', () => {
      expect(agent(4,4,[0,0],[3,3])).to.be.deep.equal(["South","East","South","East","South","East"]);
    });
    it('agent(6,5,[4,3],[1,0]) returns ["North","West","North","West","North","West"]', () => {
        expect(agent(6,5,[4,3],[1,0])).to.be.deep.equal(["North","West","North","West","North","West"]);
    });
});