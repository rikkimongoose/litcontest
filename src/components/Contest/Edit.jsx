import React from "react";
import {
  Button,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Slider
} from "@material-ui/core/";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  slider: {
    width: "95%"
  }
});

const marks = [
  {
    value: 0,
    label: "0"
  },
  {
    value: 2,
    label: "2"
  },
  {
    value: 4,
    label: "4"
  },
  {
    value: 6,
    label: "6"
  },
  {
    value: 8,
    label: "8"
  },
  {
    value: 10,
    label: "10"
  }
];

function valuetext(value) {
  return `${value}`;
}

export default function ContestEdit() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={12}>
          <TextField
            id="contest-title"
            label="Название"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid container item xs={12} spacing={12}>
          <TextField
            id="contest-description"
            label="Описание"
            fullWidth
            fullHeight
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid container justify="space-around" xs={12} spacing={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd.MM.yyyy"
                margin="normal"
                id="contest-starts"
                label="Заявки до"
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd.MM.yyyy"
                margin="normal"
                id="contest-ends"
                label="Голсование с"
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd.MM.yyyy"
                margin="normal"
                id="contest-votes"
                label="Голосование до"
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid container item xs={12} spacing={12}>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Анонимный конкурс"
          />
        </Grid>
        <Grid container item xs={12} spacing={12}>
          <Typography id="discrete-slider-custom" gutterBottom>
            Количество баллов
          </Typography>
        </Grid>
        <Grid container item xs={12} spacing={12}>
          <Slider
            className={classes.slider}
            defaultValue={5}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
            max={10}
          />
        </Grid>
        <Grid container item xs={12} spacing={12}>
          <Button variant="contained">Сохранить</Button>
        </Grid>
      </Grid>
    </div>
  );
}
