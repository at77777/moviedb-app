import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {IState} from "../types/IStateType";

const useAppSelector: TypedUseSelectorHook<IState> = useSelector;
const useAppDispatch = () => useDispatch;

export {
    useAppSelector,
    useAppDispatch
}