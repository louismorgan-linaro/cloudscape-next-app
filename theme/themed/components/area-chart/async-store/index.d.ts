type Selector<S, R> = (state: S) => R;
type Listener<S> = (state: S, prevState: S) => any;
export interface ReadonlyAsyncStore<S> {
    get(): S;
    subscribe<R>(selector: Selector<S, R>, listener: Listener<S>): () => void;
    unsubscribe(listener: Listener<any>): void;
}
export default class AsyncStore<S> implements ReadonlyAsyncStore<S> {
    _state: S;
    _listeners: [Selector<S, any>, Listener<any>][];
    constructor(state: S);
    get(): S;
    set(cb: (state: S) => S): void;
    subscribe<R>(selector: Selector<S, R>, listener: Listener<S>): () => void;
    unsubscribe(listener: Listener<any>): void;
}
export declare function useReaction<S, R>(store: ReadonlyAsyncStore<S>, selector: Selector<S, R>, effect: Listener<R>): void;
export declare function useSelector<S, R>(store: ReadonlyAsyncStore<S>, selector: Selector<S, R>): R;
export {};
//# sourceMappingURL=index.d.ts.map