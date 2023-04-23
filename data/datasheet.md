# Datasheet

## Payment & Payment Method Object 💳

By looking at each record in `payments.json` you will notice that the payment object looks like this
```{json}
{
  "id": "pmt_1",
  "amount": 2099,
  "customer_id": "cus_1",
  "payment_method": {
    "id": "pmd_1",
    "type": "card",
    "network": "visa",
    "brand": "Visa Debit",
    "funding_type": "debit"
  }
},
```

Every payment includes a payment method object that describe the type of payment method the customer chose to use for the associated payment.

* Amount: **IMPORTANT!** The payment amount is denominated in cents, this way we can use integers to represent all payment amounts. E.g. 2099 => $20.99

The `payment_method` has info about the 
* type of such as `card` or `bank`
* the network such as `visa`, `mastercard` or `acss` (which is the Canadian ACH)
* the brand such as `Visa Debit`, `Visa Platinum`, etc. The brand will affect the pricing based on the "interchange" (more about that below)
* the funding type which are `debit`, `credit` or `eft` (EFT, Electronic Fund Transfer, a.k.a. bank transfers using ACSS)

## Provider Object 🏦

By looking at each record in `providers.json` you will notice that the provider object looks like this
```{json}
{
  "name": "Stonks Go Up Ltd.",
  "id": "prov_1",
  "funding_type_capabilities": [
    "debit",
    "credit"
  ],
  "network_capabilities": [
    "visa"
  ],
  "pricing": "Interchange + 50 cents"
},
```

* `funding_type_capabilities` is an array that describes the `funding_type` of payment methods that it can process
* `network_capabilities` is an array that describe the `network` of payment methods that it can process
* The pricing describes the pricing structure.

## Interchange Pricing 💸

As you may or may not know, all cards are not created equally. Some cards cost more to process than others. Below is a table that mimics the real interchange structure of Visa and Mastercard.


| Card Brand   |  **Network Fees** | 
|---|---|
| Visa Classic  | 1.40% |
| Visa Debit  | 1.15% |
| Visa Platinum |  1.40% |
| Visa Infinite |  1.65% |
| Visa Infinite Privilege | 2.40% |
| Mastercard |  1.96% |
| Mastercard World Elite | 2.42%  |

### How to compute payment cost
For example if we have a 100$ payment with payment method: `Visa Debit` card using a provider with pricing "Interchange + 30 cents"

Then the cost of the payment will be calculated as:

Cost = 1.15% x $100 + $0.50 = $1.65

* Since the interchange rate is 1.15% for Visa Debit, that component will cost 1.15$
* Since the provider charge an extra 50 cents on top of that, it is then added to that cost for a total of $1.65 to process $100 on Visa Debit at this provider.

*Note* Some provider might have a flat fee for certain type of payment method, reach each provider's pricing carefully!

