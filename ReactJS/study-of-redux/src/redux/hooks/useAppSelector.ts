import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";

// hook typado que usa o useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector