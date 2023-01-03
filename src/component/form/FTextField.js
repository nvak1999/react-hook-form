import { useFormContext, Controller } from "react-hook-form";
import TextFields from "@mui/material/TextField";

function FTextField({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        <TextFields
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
        />;
      }}
    />
  );
}

export default FTextField;
