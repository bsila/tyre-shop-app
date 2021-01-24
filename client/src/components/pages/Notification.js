import React from "react";
import "../../App.css";
import Axios from "axios";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button, Radio, RadioGroup } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

export default function Notification() {
  const { /*register,*/ handleSubmit, /*watch,*/ errors, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  React.useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form className="notification" onSubmit={handleSubmit(onSubmit)}>
      <div className="form--container">
        <p className="title">Podaci za kontakt</p>
        <Controller
          name="receipt_number"
          control={control}
          defaultValue=""
          render={({ onChange, value, ref }) => (
            <TextField
              id="receipt_number"
              variant="outlined"
              label="Broj računa"
              className="container--item"
              placeholder="12345-1234-123"
              size="small"
              value={value}
              onChange={onChange}
              inputRef={ref}
              error={!!errors.receipt_number}
              helperText={errors?.receipt_number?.message || ""}
            />
          )}
          rules={{
            required: "Obavezno polje",
            pattern: {
              value: /^[0-9\-/]+$/i,
              message: "Unesite broj računa.",
            },
          }}
        />

        <Controller
          name="notification_mode"
          control={control}
          defaultValue=""
          render={({ onChange, value, ref }) => (
            <FormControl
              variant="outlined"
              className="container--item"
              size="small"
            >
              <InputLabel id="notification_mode_label">
                Način obavijesti
              </InputLabel>
              <Select
                labelId="notification_mode_label"
                id="notification-mode-select"
                label="Način obavijesti"
                value={value}
                onChange={onChange}
                inputRef={ref}
                error={!!errors.notification_mode}
              >
                <MenuItem value="e-mail">E-mail</MenuItem>
                <MenuItem value="SMS">SMS poruka</MenuItem>
                <MenuItem value="call">Telefonski poziv</MenuItem>
              </Select>
            </FormControl>
          )}
          rules={{
            required: true,
          }}
        />

        <Controller
          name="notification_interval"
          control={control}
          defaultValue=""
          render={({ onChange, value, ref }) => (
            <FormControl className="container--item">
              <RadioGroup
                defaultValue="30_min"
                value={value}
                onChange={onChange}
                inputref={ref}
              >
                <FormControlLabel
                  value="10_min"
                  control={<Radio />}
                  label="10 minuta prije"
                />
                <FormControlLabel
                  value="30_min"
                  control={<Radio />}
                  label="30 minuta prije"
                />
                <FormControlLabel
                  value="every_10_min"
                  control={<Radio />}
                  label="Svakih 30 minuta"
                />
                <FormControlLabel
                  value="every_hour"
                  control={<Radio />}
                  label="Svakih sat vremena"
                />
              </RadioGroup>
            </FormControl>
          )}
          rules={{
            required: true,
          }}
        />
      </div>

      <div className="form--container">
        <Button
          className="submit--button"
          linkon="0"
          buttonsize="btn--large"
          buttonstyle="btn--primary"
          type="submit"
        >
          OBAVIJESTI ME
        </Button>
      </div>
    </form>
  );
}
