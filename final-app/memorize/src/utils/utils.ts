// tslint:disable
export const compose = (...fns: any[]) =>
  fns.reverse().reduceRight((prevFn, nextFn) =>
    (...args: any[]) => nextFn(prevFn(...args)),
    (value: any) => value
  );