declare const filterMap: <A, B>(a: Array<A>, f: (e: A) => B, ps: Array<(e: A) => Boolean>) => Array<B>;
export default filterMap;
