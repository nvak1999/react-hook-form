import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { Stack } from "@mui/system";
import { Alert } from "@mui/material";
import FCheckBox from "../component/form/FCheckBox";
import FTextField from "../component/form/FTextField";
import FormProvider from "../component/form/FormProvider";
import FMultiCheckbox from "../component/form/FMultiCheckbox";
import FRadioGroup from "../component/form/FRadioGroup";
export default function ReactHookFormWithMUI() {
  const defaultValues = {
    email: "khuong@gmail.com",
    password: "123",
    remember: true,
    gender: [],
  };
  const methods = useForm({ defaultValues });
  const {
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setError("afterSubmit", { message: "Sever Responsive Error" });
  };

  return (
    <div style={{ width: 500, marginTop: 0, margin: "auto" }}>
      <Typography variant="h3" textAlign="center" mb={3}>
        React Hook Form
      </Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}

          <FTextField name="email" label="Email address" />
          <FTextField
            name="password"
            label="PassWord"
            type={showPassword ? "text" : "password"}
            inputProps={{
              endAdorment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FRadioGroup name="gender" options={["Male", "Female"]} />
          <FCheckBox name="remember" label="Remember me" />
        </Stack>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </FormProvider>
    </div>
  );
}
