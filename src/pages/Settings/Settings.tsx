import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addWater } from "../../redux";

export interface SettingsInterface {}

const Settings: React.FC<SettingsInterface> = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [vasos, setVasos] = React.useState(0);
  const onSubmit = (data: any) => {
    setVasos(data.vasos);
    dispatch(addWater(data.vasos));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          required
          label="Meta de vasos al dia"
          defaultValue={vasos}
          color="success"
          {...register("vasos")}
        />
        <Button variant="contained" color="success" type="submit">
          Guardar
        </Button>
      </form>
      <Button href="/">Home</Button>
    </div>
  );
};

export default Settings;
