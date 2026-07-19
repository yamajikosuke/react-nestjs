import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import type { UserFormValues } from "./schema";

type UserFieldProps = {
  name: keyof UserFormValues;
  label: string;
  type?: string;
};

export const UserField = ({ name, label, type }: UserFieldProps) => {
  const { control } = useFormContext<UserFormValues>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          fullWidth
          variant="outlined"
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message ?? " "}
        />
      )}
    />
  );
};
