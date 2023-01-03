import { Controller, useFormContext } from "react-hook-form";
import CheckBox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
function FMultiCheckbox({ name, options, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onSelected = (option) =>
          field.value.includes(option)
            ? field.value.filter((value) => value !== option)
            : [...field.value, option];
        return (
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                label={option}
                {...other}
                key={option}
                control={
                  <CheckBox
                    checked={field.value.includes(option)}
                    onChange={() => field.onChange(onSelected(option))}
                  />
                }
              />
            ))}
          </FormGroup>
        );
      }}
    ></Controller>
  );
}

export default FMultiCheckbox;
