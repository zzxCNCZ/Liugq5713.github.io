(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{355:function(e,t,a){e.exports=a.p+"assets/img/event-loop.7200a3fa.png"},463:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"js-事件循环机制（event-loop）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-事件循环机制（event-loop）"}},[e._v("#")]),e._v(" JS 事件循环机制（event loop）")]),e._v(" "),s("p",[e._v("javascript 是单线程的的语言，则一次只能处理一次事件，那么他是如何处理异步事件的呢？")]),e._v(" "),s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[e._v("#")]),e._v(" 基本概念")]),e._v(" "),s("ul",[s("li",[e._v("Call Stack")])]),e._v(" "),s("p",[e._v("It’s a data structure which records the function calls, basically where in the program we are. If we call a function to execute , we push something on to the stack, and when we return from a function, we pop off the top of the stack.")]),e._v(" "),s("ul",[s("li",[e._v("Heap")])]),e._v(" "),s("p",[s("strong",[e._v("Objects are allocated in a heap")]),e._v(" i.e mostly unstructured region of memory. All the memory allocation to variables and objects happens here.")]),e._v(" "),s("ul",[s("li",[e._v("Queue")])]),e._v(" "),s("p",[e._v("A JavaScript runtime contains a "),s("strong",[e._v("message queue")]),e._v(", which is a list of messages to be processed and the associated callback functions to execute.")]),e._v(" "),s("h2",{attrs:{id:"the-execution-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-execution-context"}},[e._v("#")]),e._v(" The Execution Context")]),e._v(" "),s("h2",{attrs:{id:"event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[e._v("#")]),e._v(" Event Loop")]),e._v(" "),s("p",[e._v("Event loop basic job is to look both at "),s("strong",[e._v("the stack and the task queue")]),e._v(", pushing the first thing on the queue to the stack when it see stack as empty")]),e._v(" "),s("p",[s("img",{attrs:{src:a(355),alt:"event-loop"}})]),e._v(" "),s("ol",[s("li",[e._v("所有同步任务都在主线程上执行，形成一个执行栈")]),e._v(" "),s("li",[e._v("主线程之外，还存在一个“消息队列”。只要异步操作执行完成，就到消息队列中排队")]),e._v(" "),s("li",[e._v("一旦执行栈中的所有同步任务执行完毕，系统就会依次读取消息队列的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行")]),e._v(" "),s("li",[e._v("主线程不断重复上面的的第三步")])]),e._v(" "),s("h2",{attrs:{id:"微任务和宏任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微任务和宏任务"}},[e._v("#")]),e._v(" 微任务和宏任务")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("宏任务(Task): setImmediate,setTimeout")]),e._v(" "),s("p",[e._v("Tasks execute in order, and the browser may render between them")])]),e._v(" "),s("li",[s("p",[e._v("微任务(Microtasks 或者叫 jobs): Promise,MutationObserver")]),e._v(" "),s("p",[e._v("Microtasks execute in order, and are executed:")]),e._v(" "),s("ul",[s("li",[e._v("after every callback, as long as no other JavaScript is mid-execution")]),e._v(" "),s("li",[e._v("at the end of each task")])])])]),e._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec",target:"_blank",rel:"noopener noreferrer"}},[e._v("Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000014940904#articleHeader0",target:"_blank",rel:"noopener noreferrer"}},[e._v("JS 事件循环机制（event loop）之宏任务、微任务"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/?utm_source=html5weekly",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tasks, microtasks, queues and schedules"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);