import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ISetState} from "../types/ISetState";
import {IDispatch} from "../types/IDispatchType";

const useAppSelector: TypedUseSelectorHook<ISetState> = useSelector;
const useAppDispatch = () => useDispatch<IDispatch>();

export {
    useAppSelector,
    useAppDispatch
}