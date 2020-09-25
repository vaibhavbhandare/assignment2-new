import { OrxeCheckboxgroup } from '../';
import '@testing-library/jest-dom';

describe('orxe-checkboxgroup', () => {
  let checkboxgroup;

  beforeEach(async function() {
    OrxeCheckboxgroup;
    checkboxgroup = (await document.body.appendChild(document.createElement('orxe-checkboxgroup'))) as OrxeCheckboxgroup;
  });

  afterEach(async function() {
    await checkboxgroup.remove();
  });

  it('should function render is call', () => {
    expect(checkboxgroup.render()).toBeTruthy();
  });
});
