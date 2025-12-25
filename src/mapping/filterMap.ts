const filterMap = <A, B>(a: Array<A>, f: (e: A) => B, ps: Array<(e: A) => Boolean>): Array<B> => {
    return a.reduce((acc, e) => {
        const passes = ps.every(p => p(e));
        return passes ? [...acc, f(e)] : acc;
    }, [] as Array<B>); 
}

export default filterMap;