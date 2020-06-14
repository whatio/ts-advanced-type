import { AnyTuple } from './../src/advanced-types/tuple/Tuple';
import { First } from './../src/advanced-types/tuple/First';


describe("Tuple", () => {

    it("first", () => {
        type T = [number, boolean, string];
        type FT = First<T>;

        let a: T = [1, true, "a"];
        let b: FT = a[0];
    });

});