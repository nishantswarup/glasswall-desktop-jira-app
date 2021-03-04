import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from 'enzyme';
import toJson from "enzyme-to-json";

import  Login from "./Login";


describe("Login Component", () => {
  it("should be exported", () => {
    expect(typeof Login).toEqual("function");
  });

});
