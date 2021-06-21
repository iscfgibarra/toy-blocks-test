import React from 'react';
import {Box, Grid, makeStyles, Typography} from "@material-ui/core";
import Block from "../components/Block";

const Blocks = ({blocks}) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.blockContainer}>
      { blocks.list.map( item => (
        <Grid item md={12} key={item.id}>
          <Block block={item}></Block>
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  blockContainer: {
    margin:  5
  }
}));

export default Blocks;
