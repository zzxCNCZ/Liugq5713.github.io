# Node

## 路径

- `__dirname`： 获得当前执行文件所在目录的完整目录名，返回绝对路径
- `__filename`： 获得当前执行文件的带有完整绝对路径的文件名
- `process.cwd()`：获得当前执行 node 命令时候的文件夹目录名
- `./`： 文件所在目录

### path.join vs path.resolve

`path.join` returns **a normalized path by merging two paths** together. It can return an absolute path, but it doesn't necessarily always do so.

```js
// 输出 app/libs/ssl
path.join('app/libs/oauth', '/../ssl')
```

`path.resolve` will resolve to an absolute path

```js
// 提供了根路径的情况
//输出 /foo
path.resolve('bar', '/foo')
//输出 /foo/test
path.resolve('/bar/bae', '/foo', 'test')
// 未提供根路径，path.resolve会依据你的工作路径进行路径解析
//假如你的工作路径为/home/mark/project/ ，那么输出 /home/mark/project/test/back
path.resolve('test', 'directory', '../back')
```
