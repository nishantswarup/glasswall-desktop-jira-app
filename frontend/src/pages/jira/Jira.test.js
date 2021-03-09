import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount } from 'enzyme';
import toJson from "enzyme-to-json";

import  Jira from "./Jira";


describe("Jira Component", () => {
  it("should be exported", () => {
    expect(typeof Jira).toEqual("function");
  });

});
