import {configureStore} from "@reduxjs/toolkit";
import servicesReducer from "./features/services/servicesSlice"
import storiesReducer from "./features/stories/storiesSlice"

export  const store = configureStore({
    reducer: {
        services: servicesReducer,
        stories : storiesReducer
    }
});

