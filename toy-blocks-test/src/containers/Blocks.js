import React from 'react';
import {Box, Grid, makeStyles, Typography} from "@material-ui/core";
import Block from "../components/Block";

const Blocks = ({blocks}) => {
  const classes = useStyles()
  return ( <React.Fragment>
      {
        blocks.isLoading && <Grid container className={classes.blockContainer}>
          <Grid item md={12}>
              <Typography>Is loading...</Typography>
          </Grid>
          </Grid>
      }
    { !blocks.isLoading && !blocks.error && <Grid container className={classes.blockContainer}>
        { blocks.list.map( item => (
          <Grid item md={12} key={item.id}>
            <Block block={item}></Block>
          </Grid>
        ))}
      </Grid>
    }
      { !blocks.isLoading && blocks.error && <Grid container className={classes.blockContainer}>
        <Grid item md={12}>
          <Typography>{blocks.error}</Typography>
        </Grid>
        </Grid>
      }
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  blockContainer: {
    margin:  5
  }
}));

export default Blocks;
