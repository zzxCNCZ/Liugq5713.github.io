# 文件系统

## 删除文件

```js
fs.unlinkSync(item);
```

## 创建文件

## 移动文件

```js
fs.renameSync(
  path.join(resumePath, filepath),
  path.join(archivedPath, filepath)
);
```

## 检查目录是否存在

`fs.existsSync(dirPath)`

## 创建目录

`fs.mkdirSync(dirPath)`

## 读取一个目录内的文件

`fs.readdirSync(resumePath)`
