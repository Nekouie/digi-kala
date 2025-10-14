import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

export const fetchStory = createAsyncThunk(
    "stories/fetchStories",
    async () => {
        const result = await fetch("data/stories.json");
        if (!result.ok) {
            throw new Error("no Story found");
        }
        const stories = await result.json();
        return stories;
    }
);

const storiesSlice = createSlice({
    name: "stories",
    initialState: {
        stories: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchStory.rejected, (state , action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(fetchStory.fulfilled, (state, action) => {
                state.loading = false;
                state.stories = action.payload;
            })
    },
});


export default storiesSlice.reducer