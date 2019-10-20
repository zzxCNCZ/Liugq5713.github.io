# JS 事件循环机制（event loop）

javascript 是单线程的的语言，则一次只能处理一次事件，那么他是如何处理异步事件的呢？

## 基本概念

- Call Stack

It’s a data structure which records the function calls, basically where in the program we are. If we call a function to execute , we push something on to the stack, and when we return from a function, we pop off the top of the stack.

- Heap

**Objects are allocated in a heap** i.e mostly unstructured region of memory. All the memory allocation to variables and objects happens here.

- Queue

A JavaScript runtime contains a **message queue**, which is a list of messages to be processed and the associated callback functions to execute.

## The Execution Context

## Event Loop

Event loop basic job is to look both at **the stack and the task queue**, pushing the first thing on the queue to the stack when it see stack as empty

![event-loop](./imgs/event-loop.png)

1. 所有同步任务都在主线程上执行，形成一个执行栈
2. 主线程之外，还存在一个“消息队列”。只要异步操作执行完成，就到消息队列中排队
3. 一旦执行栈中的所有同步任务执行完毕，系统就会依次读取消息队列的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行
4. 主线程不断重复上面的的第三步

## 微任务和宏任务

- 宏任务(Task): setImmediate,setTimeout
  Tasks execute in order, and the browser may render between them
- 微任务(Microtasks 或者叫 jobs): Promise,MutationObserver
  Microtasks execute in order, and are executed:
  - after every callback, as long as no other JavaScript is mid-execution
  - at the end of each task

## 参考

- [Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)
- [JS 事件循环机制（event loop）之宏任务、微任务](https://segmentfault.com/a/1190000014940904#articleHeader0)
- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly)
