# build-in-deep
learn build tool (webpack rollup etc) in deep

## 使用方式

- 下载工程并进入目录
- npm install

## 指令参数

- type：构建类型 webpack | rollup
- name: 构建实例名 子文件夹名
- rm: 是否强制清除示例的dist目录 如果示例已经生成dist，则不会重复生成，需要强制生成时 需要增加rm参数

```bash
  node index --type=webpack --name=simple --rm
```
