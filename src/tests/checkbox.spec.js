import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import testHelpers from "./test-helpers.js";
import Checkbox from "../components/Checkbox";

Enzyme.configure({ adapter: new Adapter() });

// Test example with helper functions
describe("Checkbox", () => {
  it("sets the inputs checked attibute to the state property isChecked", () => {
    const dataValue = testHelpers.getRandomBoolean();
    const onCheckboxChange = jest.fn();

    const subject = shallow(
      <Checkbox 
          isSelected={dataValue} onCheckboxChange={onCheckboxChange}
         />
      );
      expect(subject.find('input').props().checked).toEqual(dataValue);
  });
});