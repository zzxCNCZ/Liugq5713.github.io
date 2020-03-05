# Test

## react test

### snapshots

快照，和之前的进行比对，如果自己无意间进行修改了，那么就是有问题的。但是这个肯定是有问题的，因为 UI 本身就不是静态的，咱们前端工程师很少改动不改 UI 的。

快照测试很容易失败，因为我们前端就是来写页面的啊。快照测试跟不上前端开发的速度。

更新你的快照

jest --update-snapshots

---

测试的关键四点

- validity
- reliability
- objectivity
- usability

Finally, the line **expect(tree).toMatchSnapshot()** does one of these two things

- If a snapshot already exists on disk, it compares the new snapshot in tree to the one on disk. If they match, the test passes.
- If they don't, the test fails.If a snapshot does not already exist, it creates one, and the test passes.

---

Shallow rendering will only render one level, that's part of the specs for it.
