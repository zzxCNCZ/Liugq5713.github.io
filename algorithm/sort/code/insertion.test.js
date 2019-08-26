import ArrayToTest from "./test-data-arr";

import { insetion } from "./insertion";
import { insertByBinarySearch } from "./insertion-binary-search";

ArrayToTest.forEach(t => {
  test(`insetion InitialArray ${t.InitialArray} equals ${
    t.ResultArray
  }`, () => {
    expect(insetion(t.InitialArray)).toEqual(t.ResultArray);
  });

  test(`insertByBinarySearch InitialArray ${t.InitialArray} equals ${
    t.ResultArray
  }`, () => {
    expect(insertByBinarySearch(t.InitialArray)).toEqual(t.ResultArray);
  });
});
