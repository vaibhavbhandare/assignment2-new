import { OrxeSinglecheckbox } from '../';
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);
describe('orxe-singlecheckbox-axe', () => {
    let Singlecheckbox;
    beforeEach(async () => {
        OrxeSinglecheckbox;
        document.body.appendChild(document.createElement('Singlecheckbox'));
        Singlecheckbox = document.querySelector('Singlecheckbox');
    });
    afterEach(() => {
        Singlecheckbox.remove();
    });
    it('Should Create', async () => {
        const result = await axe(Singlecheckbox);
        expect(result).toBeTruthy();
    });
    it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
        const result = await axe(Singlecheckbox);
        expect(result).toHaveNoViolations();
    });
});
