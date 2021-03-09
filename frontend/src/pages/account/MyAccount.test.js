import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from 'enzyme';
import toJson from "enzyme-to-json";

import  MyAccount from "./MyAccount";


describe("MyAccount Component", () => {
  it("should be exported", () => {
    expect(typeof MyAccount).toEqual("function");
  });

});
