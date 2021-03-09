import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from 'enzyme';
import toJson from "enzyme-to-json";

import  MenuOption from "./MenuOption";


describe("MenuOption Component", () => {
  it("should be exported", () => {
    expect(typeof MenuOption).toEqual("function");
  });

});
