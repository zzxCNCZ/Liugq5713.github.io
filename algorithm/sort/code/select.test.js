import ArrayToTest from "./test-data-arr";

import { select } from "./select-base";

ArrayToTest.forEach(t => {
  test(`select InitialArray ${t.InitialArray} equals ${t.ResultArray}`, () => {
    expect(select(t.InitialArray)).toEqual(t.ResultArray);
  });
});
