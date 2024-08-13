import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FeaturesState {
  showSideBar: boolean;
  pageNavigate: string;
  darkMode: boolean;
  openProductMenu: boolean;
  accountSubNav: string;
  personalInfo: object;
  addressInfo: object;
  financialInfo: object;
}

const initialState: FeaturesState = {
  showSideBar: false,
  pageNavigate: "dashboard",
  darkMode: false,
  openProductMenu: false,
  accountSubNav: "personal",
  personalInfo: {},
  addressInfo: {},
  financialInfo: {}
};

export const featuresSlice = createSlice({
  name: "features",
  initialState,
  reducers: {
    updateSidebar: (state, action: PayloadAction<boolean>) => {
      state.showSideBar = action.payload;
    },
    updatePageNavigation: (state, action: PayloadAction<string>) => {
      state.pageNavigate = action.payload;
    },
    updateWebMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    updateProductMenu: (state, action: PayloadAction<boolean>) => {
      state.openProductMenu = action.payload;
    },
    updateAccountNav: (state, action: PayloadAction<string>) => {
      state.accountSubNav = action.payload;
    },
    updatePersonalInfo: (state, action: PayloadAction<object>) => {
      state.personalInfo = action.payload;
    },
    updateAddressInfo: (state, action: PayloadAction<object>) => {
      state.addressInfo = action.payload;
    },
    updateFinancialInfo: (state, action: PayloadAction<object>) => {
      state.financialInfo = action.payload;
    },
  },
});

export const {
  updateSidebar,
  updatePageNavigation,
  updateWebMode,
  updateProductMenu,
  updateAccountNav,
  updatePersonalInfo,
  updateAddressInfo,
  updateFinancialInfo
} = featuresSlice.actions;
export const featuresReducer = featuresSlice.reducer;
export type RootState = ReturnType<typeof featuresReducer>;
