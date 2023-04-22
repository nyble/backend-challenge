import { Provider, Pricing, SpecialPricing } from "../types/Provider"
const providers: Provider[] = [
  new Provider(
    "Stonks Go Up inc.",
    "prov_1",
    ["debit", "credit"],
    ["visa"],
    new Pricing(true, 50, 0),
    []
  ),
  new Provider(
    "Swipe Ltd.",
    "prov_2",
    ["debit","credit"],
    ["visa", "mastercard"],
    new Pricing(false, 30, 0.03),
    []
  ),
  new Provider(
    "AliDoesntPay",
    "prov_3",
    ["debit"],
    ["visa"],
    new Pricing(true, 50, 0),
    [
      new SpecialPricing(false, 85, 0, "Visa Debit")
    ]
  ),
  new Provider(
    "Silicon Valley Bonk",
    "prov_4",
    ["eft"],
    ["acss"],
    new Pricing(false, 110, 0),
    []
  ),
]

export default providers