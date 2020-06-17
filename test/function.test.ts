import { Pipe } from './../src/advanced-types/functions/Pipe'
import { Compose } from './../src/advanced-types/functions/Compose'

describe('advanced-type-function', () => {
  it('compose', () => {
    const compose = <T extends ((...args: any) => any)[]>(...fns: T): Compose<typeof fns> => {
      return ((...args: any) => {
        return fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0]
      }) as any
    }

    const numStr = (arg: number) => arg.toString()
    const sub1 = (arg: number) => arg - 1
    const x2 = (arg: number) => arg * 2
    const add = (arg1: number, arg2: number) => arg1 + arg2

    const composed = compose(numStr, sub1, x2, add)
    expect(composed(1, 2)).toBe('5')
  })

  it('pipe', () => {
    const pipe = <T extends ((...args: any) => any)[]>(...fns: T): Pipe<typeof fns> => {
      return ((...args: any) => {
        return fns.reduce((res, fn) => [fn.call(null, ...res)], args)[0]
      }) as any
    }

    const numStr = (arg: number) => arg.toString()
    const sub1 = (arg: number) => arg - 1
    const x2 = (arg: number) => arg * 2
    const add1 = (arg1: number) => arg1 + 1

    const piped = pipe(add1, x2, sub1, numStr)
    expect(piped(1)).toBe('3')
  })
})
