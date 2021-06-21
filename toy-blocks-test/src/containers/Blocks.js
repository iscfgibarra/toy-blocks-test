import React from 'react';
import {Box, CircularProgress, Grid, makeStyles, Typography} from "@material-ui/core";
import Block from "../components/Block";

const Blocks = ({blocks}) => {
  const classes = useStyles()
  return ( <React.Fragment>
      {
        blocks.isLoading && <Grid container className={classes.blockContainer} spacing={1}>
          <Grid item md={12} lg={12} xs={12}  className={classes.itemFlex}>
              <Typography>Is loading...</Typography>
          </Grid>
          <Grid item md={12} lg={12} xs={12} className={classes.itemFlex}>
              <CircularProgress />
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
          <Typography className={classes.errorBlocks}>{blocks.error}</Typography>
        </Grid>
        </Grid>
      }
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  blockContainer: {
    margin:  "0 10px"
  },
  errorBlocks: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Roboto",
    backgroundColor: "#ff0932",
    border: "solid 1px #f98298",
    width: "95%",
    borderRadius: "5px",
    padding: "3px"
  },
  itemFlex: {
    display: "flex",
    alignItems: "center",
    justifyItems: "center"
  }
}));

export default Blocks;
