import "https://esm.sh/gpu.js@2.16.0/dist/gpu-browser"

declare const GPU: typeof import("https://esm.sh/gpu.js@2.16.0").GPU

const gpu = new GPU()

{
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
}

{
    const dist = gpu.createKernel(
        function (ps: number[]) {
            const x1 = ps[this.thread.z*2]
            const y1 = ps[this.thread.z*2+1]
            const x0 = this.thread.x
            const y0 = this.thread.y
            return (x1-x0)**2+(y1-y0)**2
        }
    ).setOutput([10, 10, 2])

    const res = dist([5, 5, 4, 3])
    console.log(res)
}

