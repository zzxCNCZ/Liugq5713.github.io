# 动态规划

动态规划的核心是状态和状态转移方程

## [ Leetcode 的第 70 题 : Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

You are climbing a stair case. It takes _n_ steps to reach to the top.<br />Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?<br />这是一道比较经典的问题，爬 N 阶阶梯，每次只能前进一步或者两步，问，有多少种不同的方式可以爬这 N 阶阶梯？

我自己的做法（有错误，当 n 过大的时候，堆栈溢出）：<br />我自己思考的状态转移是这样的，新建一个二维数组，A[i][j] ，A[ i ] 保存每前进一步的所有情况，那么 A[ i+1 ] 就是将 A[ i ]数据里面的每一个结果都进行处理，加一或者加二 ，到达 N 阶就不继续操作了。自己的做法其实更像是枚举。枚举出了所有可能性

```javascript
var climbStairs = function(n) {
  // 通过新建一个二维数组，保存前进的情况
  const A = new Array(n)
  for (let i = 0; i <= n; i++) {
    A[i] = []
  }
  A[0] = [0]
  let cnt = 0
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (A[i][j] < n) {
        A[i + 1].push(A[i][j] + 1)
        if (A[i][j] + 2 <= n) {
          A[i + 1].push(A[i][j] + 2)
        }
      } else {
        cnt++
      }
    }
  }
  return cnt
}
```

但是实际上的状态转移是：`array[i] = array[i - 1] + array[i - 2];` ，到达第 i 个阶梯有两种方式，一种是从 i - 1 加一步，另一种是 i-2 加两步过来。

```javascript
var climbStairs = function(n) {
  var array = [0, 1, 2]
  for (var i = 3; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2]
  }
  return array[n]
}
```

## [Leetcode 的第 1025 题 : Divisor Game](https://leetcode.com/problems/divisor-game/)

> Alice and Bob take turns playing a game, with Alice starting first.
> Initially, there is a number N on the chalkboard. On each player's turn, that player makes a move consisting of:
> Choosing any x with 0 < x < N and N % x == 0.
> Replacing the number N on the chalkboard with N - x.
> Also, if a player cannot make a move, they lose the game.
> Return True if and only if Alice wins the game, assuming both players play optimally.

翻译一下就是两个人轮流对一个数减 1，谁减到 1 了谁就赢了。如果 Alice 赢了返回 true , Bob 赢了返回 false，从题目示例中看出 Alice 先行，默认状态为 true

那么这题的状态转移就很简单了，相当于每循环一次，`res = !res`

```javascript
var divisorGame = function(N) {
  res = true
  for (let i = 0; i < N; i++) {
    res = !res
  }
  return res
}
```

## [Leetcode 的第 121 题 :Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

> Say you have an array for which the _i_ element is the price of a given stock on day _i_.
> If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
> Note that you cannot sell a stock before you buy one.
> 给你一个数组，第 i 个元素代表第 i 天，其值代表他的价钱，你要做的就是买卖一次，利润最大。<br />这里的状态转移为：<br />`profit = Math.max(profit, prices[j] - prices[i])`

```javascript
var maxProfit = function(prices) {
  let isBuy = false
  let isSell = false
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit = Math.max(profit, prices[j] - prices[i])
    }
  }
  return profit
}
```

## [Leetcode 的第 746 题：Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)

> On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
> Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

这题的状态转移方程其实我没做出来： `let f0 = cost[i] + Math.min(f1, f2);` ，自顶向下的动态规划

```javascript
var minCostClimbingStairs = function(cost) {
  let f1 = 0
  let f2 = 0
  for (let i = cost.length - 1; i >= 0; --i) {
    let f0 = cost[i] + Math.min(f1, f2)
    // f2 上一个的结果
    f2 = f1
    // f1 本地循环的结果
    f1 = f0
  }
  return Math.min(f1, f2)
}
```
