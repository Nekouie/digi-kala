import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk(
    "services/fetchServices",
    async () => {
        const res = await fetch("/data/services.json");
        if (!res.ok) {
            throw new Error("خدماتی پیدا نشد");
        }
        const data = await res.json();
        return data;
    }
);

const serviceSlice = createSlice({
    name: "services",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
        .addCase(fetchServices.rejected, (state ,action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default serviceSlice.reducer;