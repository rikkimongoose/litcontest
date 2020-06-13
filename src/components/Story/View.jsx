import React from "react";
import { Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import StoryRate from "./Rate";
import StoryComment from "./Comment";

import {
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel
} from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});
export default function StoryView() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom>
        Текст истории
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <StoryRate />
      <StoryComment />
    </div>
  );
}
