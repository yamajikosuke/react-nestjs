import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/axios";
import type { UserFormValues } from "../schema";

export type UserProfile = {
  id: number;
  name: string;
  email: string;
};

type SaveUserProfileArgs = {
  id?: number;
  values: UserFormValues;
};

export type UserProfilesState = {
  items: UserProfile[];
  loading: boolean;
  error: string | null;
};

const initialState: UserProfilesState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchUserProfiles = createAsyncThunk(
  "userProfiles/fetchUserProfiles",
  async () => {
    const response = await api.get<UserProfile[]>("/user-profiles");
    return response.data;
  },
);

export const fetchUserProfileById = createAsyncThunk(
  "userProfiles/fetchUserProfileById",
  async (id: number) => {
    const response = await api.get<UserProfile>(`/user-profiles/${id}`);
    return response.data;
  },
);

export const saveUserProfile = createAsyncThunk(
  "userProfiles/saveUserProfile",
  async ({ id, values }: SaveUserProfileArgs) => {
    if (id) {
      const response = await api.put<UserProfile>(
        `/user-profiles/${id}`,
        values,
      );
      return response.data;
    }

    const response = await api.post<UserProfile>("/user-profiles", values);
    return response.data;
  },
);

export const deleteUserProfile = createAsyncThunk(
  "userProfiles/deleteUserProfile",
  async (id: number) => {
    await api.delete(`/user-profiles/${id}`);
    return id;
  },
);

const userProfilesSlice = createSlice({
  name: "userProfiles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfiles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchUserProfiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "一覧の取得に失敗しました。";
      })
      .addCase(fetchUserProfileById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfileById.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchUserProfileById.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "ユーザー情報の取得に失敗しました。";
      })
      .addCase(saveUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          (userProfile) => userProfile.id === action.payload.id,
        );

        if (index >= 0) {
          state.items[index] = action.payload;
          return;
        }

        state.items.unshift(action.payload);
      })
      .addCase(saveUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "保存に失敗しました。";
      })
      .addCase(deleteUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (userProfile) => userProfile.id !== action.payload,
        );
      })
      .addCase(deleteUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "削除に失敗しました。";
      });
  },
});

export default userProfilesSlice.reducer;
