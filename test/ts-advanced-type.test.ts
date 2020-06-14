import Main from "../src/ts-advanced-type"

/**
 * Main test
 */
describe("Main test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("DummyClass is instantiable", () => {
    expect(new Main()).toBeInstanceOf(Main)
  })
})
