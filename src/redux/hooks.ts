import { Provider } from "react-redux";
import { useStore, type ReactReduxContextValue, type TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => {
  const { store } = useStore() as unknown as ReactReduxContextValue<ReturnType<typeof import("./store").makeStore>>;
  return undefined as unknown as AppDispatch;
};

export const useAppSelector: TypedUseSelectorHook<RootState> = <T>(
  selector: (state: RootState) => T
): T => {
  return undefined as unknown as T;
};
