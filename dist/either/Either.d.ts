/**
 * Either: represents values ​​that can have two behaviors (Left being the special behavior and Right the expected one)
 */
type Either<E, A> = Left<E> | Right<A>;
interface Left<E> {
    readonly _tag: "Left";
    readonly left: E;
}
interface Right<A> {
    readonly _tag: "Right";
    readonly right: A;
}
/**
 * left: constructs a value of type Left
 * @param e -> value of the expected type
 * @returns -> value of the expected type Left
 */
declare const left: <E, A>(e: E) => Either<E, A>;
/**
 * right: construye un valor de tipo Right
 * @param a -> value of the expected type
 * @returns -> value of the expected type Right
 */
declare const right: <E, A>(a: A) => Either<E, A>;
/**
 * isLeft: predicate that answers: is this value of type Left?
 * @param e -> value to evaluate
 * @returns -> It returns a boolean representing whether the type is indeed Left, but it also performs type narrowing, providing information to the type checker.
 */
declare const isLeft: <E, A>(e: Either<E, A>) => e is Left<E>;
/**
 * isRight: predicate that answers: is this value of the type Right?
 * @param e -> value to evaluate
 * @returns -> It returns a boolean representing whether the type is indeed Right, but it also performs type narrowing, providing information to the type checker.
 */
declare const isRight: <E, A>(e: Either<E, A>) => e is Right<A>;
/**
 * match: simulates pattern matching on Either
 * @param onLeft  -> function that is applied to Left (specifically the value enclosed in Left)
 * @param onRight -> function that is applied to Right (specifically the value wrapped in Right)
 * @returns       -> returns the result of onLeft or onRight depending on the value of Either
 */
declare const match: <E, A, B>(cases: {
    Left: (l: E) => B;
    Right: (r: A) => B;
}) => (eith: Either<E, A>) => B;
/**
 * unpackL: returns the contents of Left
 * @param l -> Left
 * @returns -> Left<E>.left
 */
declare const unpackL: <E>(l: Left<E>) => E;
/**
 * unpackR: returns the contents of Right
 * @param r -> Right
 * @returns -> Right<A>.right
 */
declare const unpackR: <A>(r: Right<A>) => A;
/**
 * eitherMapL: returns the contents of all the Left entries in the Either list
 * @param l -> Either list
 * @returns -> List with left values (excluding right values)
 */
declare const eitherMapL: <E, A>(l: Array<Either<E, A>>) => Array<E>;
/**
 * eitherMapR: returns the contents of all the Right entries in the Either list
 * @param l -> Either list
 * @returns -> list with Right values (excluding left values)
 */
declare const eitherMapR: <E, A>(l: Array<Either<E, A>>) => Array<A>;
/**
 * EitherHashMap: Extend Map by adding secure features like safeGet.
 */
declare class EitherHashMap<K, V> extends Map<K, V> {
    constructor(entries?: Iterable<readonly [K, V]>);
    /**
     * safeGet: is a secure Map.get()
     * @param key -> key of the element you want to search for
     * @returns   -> If found, return the element wrapped in a right, otherwise return left.
     */
    safeGet(key: K): Either<Error, V>;
}
export type { Either, Left, Right };
export { left, right, isLeft, isRight, match, unpackL, unpackR, eitherMapL, eitherMapR, EitherHashMap };
