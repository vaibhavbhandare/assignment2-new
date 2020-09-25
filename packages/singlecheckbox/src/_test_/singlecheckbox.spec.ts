import { OrxeSinglecheckbox } from '../';
import '@testing-library/jest-dom';

describe('orxe-singlecheckbox', () => {
  let checkbox;

  beforeEach(async function() {
    OrxeSinglecheckbox;
    checkbox = (await document.body.appendChild(document.createElement('orxe-singlecheckbox'))) as OrxeSinglecheckbox;
  });

  afterEach(async function() {
    await checkbox.remove();
  });

  /**
   * Function that returns an element containing the testId data attribute.
   */
  function getByTestId(id: string): HTMLElement {
    return checkbox.shadowRoot.querySelector(`[data-testId=${id}]`);
  }

  it('should function render is call', () => {
    expect(checkbox.render()).toBeTruthy();
  });

  it('should function checkbox is call and checkbox state false', () => {
    let dummyEvent = {
      target: {
        firstElementChild: { checked: true }
      }
    }
    expect(checkbox.checkbox(dummyEvent)).toBeUndefined();
  });

  it('should function checkbox is call and checkbox state true', () => {
    let dummyEvent = {
      target: {
        firstElementChild: { checked: false }
      }
    }
    expect(checkbox.checkbox(dummyEvent)).toBeUndefined();
  });

  it('should function checkboxDisabled is call', () => {
    let dummyEvent = {
      target: {
        firstElementChild: { disabled: true }
      }
    }
    expect(checkbox.checkboxDisabled(dummyEvent)).toBeUndefined();
  });

  it('should check default value of isCheckboxSelected is undefined', () => {
    expect(checkbox.isCheckboxSelected).toBeUndefined();
  });

  it('should function firstUpdated is call', () => {
    expect(checkbox.firstUpdated()).toBeUndefined();
  });

  it('should function checkboxSelect is call and state select false', () => {
    let dummyEvent = {
      target: {
        previousElementSibling: { checked: true }
      }
    }
    expect(checkbox.checkboxSelect(dummyEvent)).toBeUndefined();
  });

  it('should function checkboxSelect is call and state select true', () => {
    let dummyEvent = {
      target: {
        previousElementSibling: { checked: false }
      }
    }
    expect(checkbox.checkboxSelect(dummyEvent)).toBeUndefined();
  });



  it('Should checkbox have attribute checkbox-unable', async () => {
    const checkboxContainer = getByTestId('checkbox-container');
    expect(checkboxContainer).toHaveClass('checkbox-unable');
    expect(checkboxContainer).toHaveAttribute('class', 'checkbox-unable')
  });

});