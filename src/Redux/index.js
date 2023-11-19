import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./loginslice";
import storage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import agentSlice from "./agentSlice";

const rootpersistConfig = {
  key: "root",
  version: 1,
  storage,
  stateReconciler: autoMergeLevel2,
};
const adminpersistConfig = {
  key: "loginslice",
  version: 1,
  storage,
  // stateReconciler: autoMergeLevel2,
  blacklist: ["loading", "isSuccess"],
};
const agentpersistConfig = {
  key: "agentSlice",
  version: 1,
  storage,
  // stateReconciler: autoMergeLevel2,
  blacklist: ["loading", "isSuccess"],
};

const rootReducer = combineReducers({
  loginslice: persistReducer(adminpersistConfig, loginSlice),
  agentSlice: persistReducer(agentpersistConfig, agentSlice),
});
const persistedReducer = persistReducer(rootpersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
