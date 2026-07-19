import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserProfile,
  fetchUserProfiles,
} from "./store/userProfilesSlice";
import type { AppDispatch, RootState } from "../Redux/store/store";

export const UserListPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [deletingUser, setDeletingUser] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const { items, loading, error } = useSelector(
    (state: RootState) => state.userProfiles,
  );

  useEffect(() => {
    void dispatch(fetchUserProfiles());
  }, [dispatch]);

  const handleDeleteOpen = (id: number, name: string) => {
    setDeletingUser({ id, name });
  };

  const handleDeleteCancel = () => {
    setDeletingUser(null);
  };

  const handleDeleteConfirm = async () => {
    if (!deletingUser) {
      return;
    }

    await dispatch(deleteUserProfile(deletingUser.id)).unwrap();
    setDeletingUser(null);
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          background: "linear-gradient(180deg, #ffffff 0%, #f7fafc 100%)",
        }}
      >
        <Stack spacing={3}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            spacing={2}
          >
            <Box>
              <Typography variant="overline" color="primary">
                User List
              </Typography>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                ユーザー一覧
              </Typography>
              <Typography variant="body2" color="text.secondary">
                登録済みユーザーをDBから表示します。
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/userForm")}
            >
              登録
            </Button>
          </Stack>

          {error ? <Alert severity="error">{error}</Alert> : null}

          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>名前</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>メール</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="right">
                  操作
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading && items.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3}>読み込み中...</TableCell>
                </TableRow>
              ) : null}

              {!loading && items.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3}>
                    登録済みユーザーはありません。
                  </TableCell>
                </TableRow>
              ) : null}

              {items.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell align="right">
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="flex-end"
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => navigate(`/userForm?id=${item.id}`)}
                      >
                        編集
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => {
                          handleDeleteOpen(item.id, item.name);
                        }}
                      >
                        削除
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Stack>
      </Paper>

      <Dialog open={Boolean(deletingUser)} onClose={handleDeleteCancel}>
        <DialogTitle>ユーザー削除確認</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 1 }}>
            このユーザーを削除します。よろしいですか？
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID: {deletingUser?.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ユーザー名: {deletingUser?.name}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>キャンセル</Button>
          <Button
            onClick={() => {
              void handleDeleteConfirm();
            }}
            color="error"
            variant="contained"
            disabled={loading}
          >
            削除する
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
