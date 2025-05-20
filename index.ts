import "https://esm.sh/gpu.js@2.16.0/dist/gpu-browser"

declare const GPU: typeof import("https://esm.sh/gpu.js@2.16.0").GPU

const gpu = new GPU()
const mul = gpu.createKernel(
    function (a: number[][], b: number[][]) {
        let sum = 0
        for (let i=0; i<1; i++) {
            sum += a[this.thread.y][i] * b[i][this.thread.x]
        }
        return sum
    }
).setOutput([1, 1])

const c = mul([[10]], [[20]])

console.log(c)
