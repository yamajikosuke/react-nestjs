import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfileById,
  saveUserProfile,
} from "./store/userProfilesSlice";
import { userFormSchema, type UserFormValues } from "./schema";
import type { AppDispatch, RootState } from "../Redux/store/store";
import { UserField } from "./UserField";

export const UserFormPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const editingId = searchParams.get("id");
  const userId = editingId ? Number(editingId) : null;
  const isEditMode = userId !== null && Number.isFinite(userId);

  const { loading, error } = useSelector(
    (state: RootState) => state.userProfiles,
  );

  const methods = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
    mode: "onBlur",
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (!isEditMode || userId === null) {
      return;
    }

    void dispatch(fetchUserProfileById(userId))
      .unwrap()
      .then((userProfile) => {
        reset({
          name: userProfile.name,
          email: userProfile.email,
        });
      });
  }, [dispatch, isEditMode, reset, userId]);

  const onSubmit = async (values: UserFormValues) => {
    await dispatch(
      saveUserProfile({
        id: isEditMode ? (userId ?? undefined) : undefined,
        values,
      }),
    ).unwrap();

    navigate("/userList");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
        }}
      >
        <Stack spacing={3}>
          <Box>
            <Typography variant="overline" color="primary">
              User Form
            </Typography>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {isEditMode ? "ユーザー編集" : "ユーザー登録"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              名前とメールアドレスを登録・更新します。
            </Typography>
          </Box>

          {error ? <Alert severity="error">{error}</Alert> : null}

          <FormProvider {...methods}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2.5}>
                <UserField name="name" label="名前" />
                <UserField name="email" label="メール" type="email" />

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{ minWidth: 140 }}
                  >
                    {loading ? "送信中..." : "送信"}
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    size="large"
                    onClick={() => navigate("/userList")}
                  >
                    一覧へ戻る
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </FormProvider>
        </Stack>
      </Paper>
    </Container>
  );
};
