import { OrxeCheckboxgroup } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-checkboxgroup-axe', () => {

  let Checkboxgroup;

  beforeEach(async () => {
    OrxeCheckboxgroup;
    document.body.appendChild(document.createElement('Checkboxgroup'));
    Checkboxgroup = document.querySelector('Checkboxgroup') as OrxeCheckboxgroup;
  });

  afterEach(() => {
    Checkboxgroup.remove();
  });

  it('should create', () => {
    expect(OrxeCheckboxgroup).toBeTruthy();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(Checkboxgroup);
    expect(result).toHaveNoViolations();
  });
});
