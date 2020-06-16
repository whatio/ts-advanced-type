import { Cast } from './../src/advanced-types/utils/Cast'
import { AnyTuple } from './../src/advanced-types/tuple/Tuple'
import { First } from './../src/advanced-types/tuple/First'
import { Counter } from './../src/advanced-types/tuple/Counter'

describe('advanced-type-tuple', () => {
  it('first', () => {
    expect(((arr: Counter<5>): First<Counter<5>> => arr[0])([0, 1, 2, 3, 4])).toBe(0)
    expect(((arr: Counter<5>): First<Counter<5>> => arr[0])([1])).not.toBe(0)
  })
})
