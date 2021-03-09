import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from 'enzyme';
import toJson from "enzyme-to-json";

import  About from "./About";


describe("About Component", () => {
  it("should be exported", () => {
    expect(typeof About).toEqual("function");
  });

});
