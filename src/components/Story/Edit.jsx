import React from "react";
import { Button, TextField, Grid } from "@material-ui/core/";

export default function StoryEdit() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={12}>
          <TextField
            id="story-title"
            label="Название"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid container item xs={12} spacing={12}>
          <TextField
            id="story-text"
            label="Текст"
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
    </div>
  );
}
