import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    userSlice,
  },
=======
>>>>>>> master
// import userSlice from "./userSlice";
import bookSlice from "./bookSlice";

export default configureStore({
    reducer: {
     bookSlice
    },
<<<<<<< HEAD
=======
>>>>>>> c768913a95c76e4e78414e5cc17365b41670cd77
>>>>>>> master
});