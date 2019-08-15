import { bubble } from "./bubble-base";
import { bubbleWithPos } from "./bubble-pos";
import { bubbleWithGuard } from "./bubble-guard";
import { bubbleWithTwoWay } from "./bubble-two-way";
const ArrayToTest = [
  {
    InitialArray: [],
    ResultArray: []
  },
  {
    InitialArray: [11, 5, 6, 1, 7, 3],
    ResultArray: [1, 3, 5, 6, 7, 11]
  },
  {
    InitialArray: [4, 11, 9, 12, 13, 7, 5, 6, 8, 20],
    ResultArray: [4, 5, 6, 7, 8, 9, 11, 12, 13, 20]
  },
  {
    InitialArray: [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24],
    ResultArray: [7, 9, 10, 20, 24, 30, 31, 35, 60, 65, 65, 77, 81, 91, 96]
  }
];
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
