import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: true,
  division: "",
  district: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.division = action.payload.division;
      state.district = action.payload.district;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const { setLocation, setShowModal } = locationSlice.actions;
export default locationSlice.reducer;
