export function compose<A, B, C>(
    f2: (b: B) => C,
    f1: (a: A) => B
): (a: A) => C;

export function compose<A, B, C, D>(
    f3: (c: C) => D,
    f2: (b: B) => C,
    f1: (a: A) => B,
): (a: A) => D;

export function compose<A, B, C, D, E>(
    f4: (d: D) => E,
    f3: (c: C) => D,
    f2: (b: B) => C,
    f1: (a: A) => B
): (a: A) => E;

export function compose<A, B, C, D, E, F>(
    f5: (e: E) => F,
    f4: (d: D) => E,
    f3: (c: C) => D,
    f2: (b: B) => C,
    f1: (a: A) => B
): (a: A) => F;

export function compose<A, B, C, D, E, F, G>(
    f6: (f: F) => G,
    f5: (e: E) => F,
    f4: (d: D) => E,
    f3: (c: C) => D,
    f2: (b: B) => C,
    f1: (a: A) => B
): (a: A) => G;

export function compose<A, B, C, D, E, F, G, H>(
    f7: (g: G) => H,
    f6: (f: F) => G,
    f5: (e: E) => F,
    f4: (d: D) => E,
    f3: (c: C) => D,
    f2: (b: B) => C,
    f1: (a: A) => B
): (a: A) => H;

export function compose<A, B, C, D, E, F, G, H, I>(
    f8: (h: H) => I,
    f7: (g: G) => H,
    f6: (f: F) => G,
    f5: (e: E) => F,
    f4: (d: D) => E,
    f3: (c: C) => D,
    f2: (b: B) => C,
    f1: (a: A) => B
): (a: A) => I;

export function compose<A, B, C, D, E, F, G, H, I, J>(
    f9: (i: I) => J,
    f8: (h: H) => I,
    f7: (g: G) => H,
    f6: (f: F) => G,
    f5: (e: E) => F,
    f4: (d: D) => E,
    f3: (c: C) => D,
    f2: (b: B) => C,
    f1: (a: A) => B
): (a: A) => J;

export function compose<A, B, C, D, E, F, G, H, I, J, K>(
    f10: (j: J) => K,
    f9: (i: I) => J,
    f8: (h: H) => I,
    f7: (g: G) => H,
    f6: (f: F) => G,
    f5: (e: E) => F,
    f4: (d: D) => E,
    f3: (c: C) => D,
    f2: (b: B) => C,
    f1: (a: A) => B
): (a: A) => K;

// generic
export function compose(...fns: Array<Function>): any {
    return (x: any) => [...fns].reverse().reduce((acc, fn) => fn(acc), x);
}
