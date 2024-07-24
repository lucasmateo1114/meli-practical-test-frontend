import buildSeoKeywords from "../buildSeoKeywords"

describe("buildSeoKeywords test", () => {
  it("Should get correct string of keywords separated by comma", () => {
    const keywords = buildSeoKeywords(["computador"])
    expect(keywords).toBe(
      "computador en linea, Mejor precio computador, Tienda en línea computador",
    )
  })
})
