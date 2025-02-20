export type StreamTextResult<T = any, E = any> = {
  data?: T;
  error?: E;
  text: string;
};
