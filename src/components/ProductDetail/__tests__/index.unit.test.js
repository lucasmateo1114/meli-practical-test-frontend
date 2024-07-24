import { render } from "@testing-library/react"
import ProductDetail from "./../"
import CurrenciesProvider from "../../../contexts/currenciesContext"

jest.mock("../../../common/clients/currencies", () => {
  return {
    getCurrenciesFromSite: () => mockCurrencies,
  }
})

const mockCurrencies = [
  {
    id: "ARS",
    symbol: "$",
  },
  {
    id: "USD",
    symbol: "US$",
  },
]

const mockProduct = {
  id: "MLA1850129316",
  title: "Tcl Led L32s5400 Android Tv",
  price: {
    currency: "ARS",
    amount: 349999,
    decimals: 0,
  },
  picture: "http://http2.mlstatic.com/D_809461-MLU77623276561_072024-I.jpg",
  condition: "new",
  free_shipping: true,
  sold_quantity: 0,
  description:
    "TCL es una de las empresas líderes en la industria global de televisores, dedicada a la investigación y desarrollo de productos electrónicos. Orientada a la satisfacción de sus clientes, se distingue por proveer una excelente experiencia a quienes adquieran y usen sus diferentes líneas de electrodomésticos.\n\nCon el Smart TV L32S5400 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.\n\nSumergite en la pantalla\nSu resolución Full HD muestra una clara evolución frente a su antecesora. Las imágenes que vas a ver van a tener una calidad superior con un alto nivel de detalle y colores mucho más llamativos.\n\nUn sonido que te envuelve\nVas a sentir que proviene desde todas las direcciones posibles, lo cual enriquece la percepción del mismo. Los diálogos de tus series de fin de semana o la música de tus cantantes preferidos van a cobrar otro significado.",
  categories: ["Electrónica, Audio y Video", "Televisores"],
}

describe("ProductDetail tests", () => {
  it("Should render correctly", () => {
    const { getByText } = render(
      <CurrenciesProvider>
        <ProductDetail product={mockProduct} />
      </CurrenciesProvider>,
    )
    expect(getByText("Tcl Led L32s5400 Android Tv")).toBeInTheDocument()
  })

  it("Should render correctly when sold quantity is greater than 0", () => {
    const { getByText } = render(
      <CurrenciesProvider>
        <ProductDetail product={{ ...mockProduct, sold_quantity: 3 }} />
      </CurrenciesProvider>,
    )
    expect(getByText(/vendidos/i)).toBeInTheDocument()
  })
})
