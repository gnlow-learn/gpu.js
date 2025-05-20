# gpu.js

## memo

### function 대신 문자열 넣기
- 그냥 문자열 넣으면 function string 아니라고 오류남
- 근데 그냥 앞부분만 function으로 맞추면 됨
```js
// gpu.js 소스 코드
isFunctionString(fn) {
  if (typeof fn === 'string') {
    return (fn
      .slice(0, 'function'.length)
      .toLowerCase() === 'function');
  }
  return false;
}
```
```ts
const kernel = gpu.createKernel(`
    function () {
        return this.thread.x
    }
`.trim() as any).setOutput([10])

const res = kernel()
console.log(res) // [ 0, 1, 2, ..., 9 ]
```
