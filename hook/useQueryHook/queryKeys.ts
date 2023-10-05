export const queryKeys = {
  exchangeRate: ['exchangeRate'],
  exampleItemGet: (title: string) => ['exampleItemGet', title],
  myPortFolio: () =>
    // isSimple?: boolean | null,
    // exchangeRate?: number,
    // isTax?: boolean | null,
    [
      'myPortFolio',
      // isSimple,
      // isTax,
      // exchangeRate
    ],
  changedMyPortfolio: (
    isSimple?: boolean | null,
    exchangeRate?: number,
    isTax?: boolean | null,
  ) => ['changedMyPortfolio', isSimple, isTax, exchangeRate],
  annualDividend: (
    isSimple?: boolean | null,
    exchangeRate?: number,
    isTax?: boolean | null,
  ) => ['annualDividend', isSimple, isTax, exchangeRate],
  monthlyCalanderDividend: (
    isSimple?: boolean | null,
    exchangeRate?: number,
    isTax?: boolean | null,
  ) => ['monthlyCalanderDividend', isSimple, isTax, exchangeRate],
  popularStocks: () => ['popularStocks'],
  recentSearchWords: () => ['getRecentSearchWords'],
  searchedResults: (word: string) => ['searchedResults', word],
  currentPrice: (assetIds: number) => ['currentPrice', assetIds],
  currentPrices: (assetIds: number[]) => ['currentPrice', assetIds],
  portfolio: () => ['portfolio'],
};
