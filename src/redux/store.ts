import {configureStore} from "@reduxjs/toolkit";
import userInfoReducer from "./slices/userInfoSlice";
import openedFilesSlice from "./slices/openedFilesSlice";
import { IFile } from "../editor/Editor";

export interface IState {
  openedFiles: IFile[]
}

export default configureStore({
  reducer:{
    userInfo:userInfoReducer,
    openedFiles:openedFilesSlice
  }
})
