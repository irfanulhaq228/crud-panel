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
  product: object;
}

const initialState: FeaturesState = {
  showSideBar: false,
  pageNavigate: "dashboard",
  darkMode: false,
  openProductMenu: false,
  accountSubNav: "personal",
  personalInfo: {},
  addressInfo: {},
  financialInfo: {},
  product: {}
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
      console.log("personal info api pending");
    },
    updateAddressInfo: (state, action: PayloadAction<object>) => {
      state.addressInfo = action.payload;
      console.log("address api pending");
    },
    updateFinancialInfo: (state, action: PayloadAction<object>) => {
      state.financialInfo = action.payload;
      console.log("api pending");
    },
    updateProduct: (state, action: PayloadAction<object>) => {
      state.product = action.payload;
      console.log("create api api pending");
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
  updateFinancialInfo,
  updateProduct
} = featuresSlice.actions;
export const featuresReducer = featuresSlice.reducer;
export type RootState = ReturnType<typeof featuresReducer>;
