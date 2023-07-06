type Romans = {
  [key: string]: number;
};

export function toRoman (arabicNumber: number){
  let romanNumber = "";
  for (const key in romanToArab) {
    if (arabicNumber === 0) {
      return romanNumber;
    }
    while (arabicNumber >= romanToArab[key]) {
      romanNumber += key;
      arabicNumber -= romanToArab[key];
    }
  }
  return romanNumber;
};

export const romanToArab: Romans = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
} as const;

export function  memoize<T extends (...args: any[]) => any>(func: T): T {
  const cache: Record<string, any> = {};

  const memoizedFunc = (...args: any[]): any => {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log('Fetching from cache');
      return cache[key];
    }
    const result = func(...args);
    cache[key] = result;
    console.log('Fetching from result');
    return result;
  };

  return memoizedFunc as T;
}

