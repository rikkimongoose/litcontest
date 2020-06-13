import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  TextField,
  Grid,
  Button
} from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});
export default function StoryRate() {
  const classes = useStyles();

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Ваша оценка</FormLabel>

      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={12}>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="star-5"
            className={classes.root}
          >
            <FormControlLabel
              value="star-1"
              control={<Radio color="primary" />}
              label="1"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="star-2"
              control={<Radio color="primary" />}
              label="2"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="star-3"
              control={<Radio color="primary" />}
              label="3"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="star-4"
              control={<Radio color="primary" />}
              label="4"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="star-5"
              control={<Radio color="primary" />}
              label="5"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </Grid>
        <Grid container item xs={12} spacing={12}>
          <TextField
            id="story-text"
            label="Ваш комментарий"
            fullWidth
            fullHeight
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid container item xs={12} spacing={12}>
          <Button variant="contained">Сохранить</Button>
        </Grid>
      </Grid>
    </FormControl>
  );
}
