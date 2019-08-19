import { bubble } from "./bubble-base";
import { bubbleWithPos } from "./bubble-pos";
import { bubbleWithGuard } from "./bubble-guard";
import { bubbleWithTwoWay } from "./bubble-two-way";

import ArrayToTest from "./test-data-arr";

ArrayToTest.forEach(t => {
  test(`bubble InitialArray ${t.InitialArray} equals ${t.ResultArray}`, () => {
    expect(bubble(t.InitialArray)).toEqual(t.ResultArray);
  });

  test(`bubbleWithPos InitialArray ${t.InitialArray} equals ${
    t.ResultArray
  }`, () => {
    expect(bubbleWithPos(t.InitialArray)).toEqual(t.ResultArray);
  });

  test(`bubbleWithGuard InitialArray ${t.InitialArray} equals ${
    t.ResultArray
  }`, () => {
    expect(bubbleWithGuard(t.InitialArray)).toEqual(t.ResultArray);
  });

  test(`bubbleWithTwoWay InitialArray ${t.InitialArray} equals ${
    t.ResultArray
  }`, () => {
    expect(bubbleWithTwoWay(t.InitialArray)).toEqual(t.ResultArray);
  });
});
