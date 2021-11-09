import React from "react";

import List from "../components/List.jsx";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { shallow, mount } from "enzyme";

describe("test to see if List component is rendering and functioning as expected", () => {
  let wrapper;
  const testHeaders = [
    { id: "name", label: "Name", minWidth: 100, align: "center" },
    { id: "header1", label: "Header1", minWidth: 100, align: "center" },
    { id: "header2", label: "Header2", minWidth: 100, align: "center" },
    { id: "header3", label: "Header3", minWidth: 100, align: "center" },
    { id: "header4", label: "Header4", minWidth: 100, align: "center" },
  ];
  const testValues = [
    {
      name: "test1",
      header1: true,
      header2: 4,
      header3: "yes",
      header4: "good",
    },
    {
      name: "test2",
      header1: false,
      header2: 7,
      header3: "no",
      header4: "good",
    },
    {
      name: "test3",
      header1: true,
      header2: 2,
      header3: "yes",
      header4: "bad",
    },
    {
      name: "test4",
      header1: true,
      header2: 1,
      header3: "yes",
      header4: "average",
    },
    {
      name: "test5",
      header1: true,
      header2: 11,
      header3: "yes",
      header4: "average",
    },
    {
      name: "test6",
      header1: false,
      header2: 9,
      header3: "no",
      header4: "good",
    },
  ];
  beforeAll(() => {
    wrapper = mount(
      <List
        listValueHeaders={testHeaders}
        listValue={testValues}
        reroute={false}
      />
    );
  });
  beforeEach(() => {});
  test("number of rows should be according to the number of listValues prop plus the header - 7 in test", () => {
    expect(wrapper.find(TableRow)).toHaveLength(7);
  });
  test("number of columns should be according to the listValueHeaders prop - 5 in test", () => {
    expect(wrapper.find(TableRow).at(0).find(TableCell)).toHaveLength(5);
  });
  test("number of cells should be according to the listValueHeaders and listValues props - 35 in test", () => {
    expect(wrapper.find(TableCell)).toHaveLength(35);
  });
  test("first column header should be 'Name'", () => {
    expect(wrapper.find(TableRow).at(0).props().children[0].key).toBe("name");
  });
});
