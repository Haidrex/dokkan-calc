interface SA {
  name: string;
  value: number;
}

export interface SAMultiplier {
  name: string;
  SA: SA[];
}
