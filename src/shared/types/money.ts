export type CurrencyCode = 'USD' | 'EUR' | 'UAH'

export type Money = {
  amount: bigint
  currency: CurrencyCode
}
