import './present';
import { eachEnzymeMethod } from '../../test-setup/each-render-method';
import React from 'react';

const PresentFixture = () => (
  <div>
    <div id="burgers">with cheese</div>
    <div>side of fries</div>
  </div>
);

describe('Present: component added', () => {
  const shouldEnzyme = should;
  let wrapper, burgers, fries;

  it('should have new method present', () => {
    shouldEnzyme.should.have.property('present');
  });

  eachEnzymeMethod(['shallow', 'mount', 'render'], (renderMethod, methodName) => {
    context(methodName, () => {
      before(() => {
        wrapper = renderMethod(<PresentFixture />);
        burgers = wrapper.find('#burgers');
        fries = wrapper.find('#noFries');
      });

      it('should be "present"', () => {
        burgers.should.be.present();
      });

      it('should NOT be "present"', () => {
        fries.should.not.be.present();
      });

      // it('should see useful error message when wrapper is expected to be present', () => {
      //   (() => burgers.should.be.present())
      //   .should.throwError(/expected 'div' to be present but was not found/);
      // });

      // it('should see useful error message when wrapper is expected not to be there', () => {
      //   (() => checked.should.not.be.checked())
      //   .should.throwError(/expected 'div' to NOT be present but was found/);
      // });
    });
  });
});
