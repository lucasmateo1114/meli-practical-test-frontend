import { searchItems, getItemById } from "../items"

const mockAxiosResponse = jest.fn()
jest.mock("../../axiosWithRetry", () => {
  return () => ({
    get: mockAxiosResponse,
  })
})

const mockItemData = {
  data: {
    author: {
      name: "Lucas",
      lastname: "Sánchez",
    },
    item: {
      id: "MLA1604282662",
      title: "Smart Philips 32 Hd 32phd6918/77 Google Tv Serie 6000",
      price: {
        currency: "ARS",
        amount: 299999,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_677196-MLU74154724021_012024-I.jpg",
      condition: "new",
      free_shipping: true,
      sold_quantity: 0,
      description:
        "Este televisor Philips de 32 pulgadas luce genial dondequiera que lo coloque. La imagen es nítida y el sonido es claro, lo cual caracteriza al simplemente inteligente Philips Google TV.",
      categories: ["Electrónica, Audio y Video", "Televisores"],
    },
  },
}

const mockItemsData = {
  data: {
    author: {
      name: "Lucas",
      lastname: "Sánchez",
    },
    categories: ["Computación", "PC de Escritorio", "PC"],
    items: [
      {
        id: "MLA1857516014",
        title:
          "Ordenador Pc Cpu Core I5 16 Gb Memoria Ram Ssd 480 Gb Wifi Windows 10",
        price: {
          currency: "ARS",
          amount: 347337,
          decimals: 0.48,
        },
        picture:
          "http://http2.mlstatic.com/D_953893-MLU74993269248_032024-I.jpg",
        condition: "new",
        free_shipping: true,
        brand: "Intel",
      },
      {
        id: "MLA1734161474",
        title: "Computadora Notebook Core I5 Economica Ideal Trabajo Estudio",
        price: {
          currency: "ARS",
          amount: 315000,
          decimals: 0,
        },
        picture:
          "http://http2.mlstatic.com/D_603993-MLA76963013069_062024-I.jpg",
        condition: "new",
        free_shipping: true,
        brand: "EXO",
      },
    ],
  },
}

describe("Items client test", () => {
  it("searchItems shoudl get data correctly", async () => {
    mockAxiosResponse.mockResolvedValue(mockItemsData)
    const response = await searchItems("term")
    expect(response.items.length).toBe(2)
  })

  it("searchItems should get error 404", async () => {
    mockAxiosResponse.mockRejectedValue({ response: { status: 404 } })
    const response = await searchItems("term")
    expect(response.statusCode).toBe(404)
  })

  it("searchItems should get error 500", async () => {
    mockAxiosResponse.mockRejectedValue({ error: true })
    const response = await searchItems("term")
    expect(response.statusCode).toBe(500)
  })

  it("getItemById shoudl get data correctly", async () => {
    mockAxiosResponse.mockResolvedValue(mockItemData)
    const response = await getItemById("id")
    expect(response.item.id).toBe("MLA1604282662")
  })

  it("getItemById should get error 404", async () => {
    mockAxiosResponse.mockRejectedValue({ response: { status: 404 } })
    const response = await getItemById("id")
    expect(response.statusCode).toBe(404)
  })

  it("getItemById should get error 500", async () => {
    mockAxiosResponse.mockRejectedValue({ error: true })
    const response = await getItemById("id")
    expect(response.statusCode).toBe(500)
  })
})
