# 音视频的操作

音视频有一些通用的事件，play ,pause , canplay, ended

ps: 音视频播放必须由用户事件触发

## 音频

新建一个 Audio 的实例

```js
new Audio();
```

或者使用 Audio 标签

```html
<audio controls src="/media/examples/t-rex-roar.mp3">
  Your browser does not support the
  <code>audio</code> element.
</audio>
```

### 计算音频的播放进度

```js
const playProcess = audioObj.currentTime / audioObj.duration;
```

## 视频

### 获取视频的加载进度

[HTMLMediaElement.buffered](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/buffered)

```js
function getDownloaded(video: HTMLVideoElement) {
  let end = 0;
  try {
    end = video.buffered.end(0) || 0;
    return end / video.duration;
  } catch (e) {
    return 0;
  }
}
```
