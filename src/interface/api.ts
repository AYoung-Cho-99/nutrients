export interface APIReturnType<T = any> {
  code: string;
  message?: string;
  data?: T;
  desc?: string;
  map?: any;
  result?: boolean;
  meg?: string;
  msg?: string;
}
