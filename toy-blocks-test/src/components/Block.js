import React from 'react';
import {Box, makeStyles, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import Node from "./Node";

const Block = ({ block }) => {
  const classes = useStyles();
  return (
    <Box className={classes.block}>
      <Typography className={classes.blockIndex}>{block.id}</Typography>
      <Typography className={classes.blockDescription}>{block.description}</Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  blockContainer: {
    margin:  5
  },
  block: {
    margin: "4px 0 0 0",
    padding: "8px 8px 4px 8px",
    height: "48px",
    background: "rgba(0, 0, 0, 0.12)",
    borderRadius: 2
  },
  blockIndex: {
    height: "16px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "10px",
    lineHeight: "16px",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "#304FFE"
  },
  blockDescription: {
    height: "20px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineheight: "20px",
    letterSpacing: "0.25px",
    color: "#263238"
  }
}));

Block.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
};


export default Block;
