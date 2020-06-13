import React from "react";
import { Typography, Grid } from "@material-ui/core/";

export default function StoryComment() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={12}>
          <Typography variant="subtitle1" gutterBottom>
            Бутерброд. Оценка: N
          </Typography>
        </Grid>
        <Grid container item xs={12} spacing={12}>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
