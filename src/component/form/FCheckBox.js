import { useFormContext, Controller } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckBox from "@mui/material/Checkbox";
function FCheckBox({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <FormControlLabel
      control={
        <Controller
          {...other}
          name={name}
          control={control}
          render={({ field }) => {
            <CheckBox {...field} checked={field.value} />;
          }}
        />
      }
    />
  );
}

export default FCheckBox;
