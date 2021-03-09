import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from 'enzyme';
import toJson from "enzyme-to-json";

import  Dashboard from "./Dashboard";


describe("Dashboard Component", () => {
  it("should be exported", () => {
    expect(typeof Dashboard).toEqual("function");
  });

});
