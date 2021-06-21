import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as nodesActions from "../actions/nodes";
import * as blockActions from "../actions/blocks";
import Node from "../components/Node";
import { Typography, Box } from "@material-ui/core";


export class Nodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedNodeURL: null,
    };
    this.toggleNodeExpanded = this.toggleNodeExpanded.bind(this);
  }

  componentDidMount() {
    this.props.nodesActions.checkNodeStatuses(this.props.nodes.list);
  }

  toggleNodeExpanded(node) {
    this.setState({
      expandedNodeURL:
        node.url === this.state.expandedNodeURL ? null : node.url,
    });

    this.props.blockActions.checkBlockStatus(node);
  }

  render() {
    const { nodes, blocks } = this.props;
    return (
      <Box paddingTop={7}>
        <Typography variant="h4" component="h1">
          <strong style={{ color: "#000" }}>Nodes</strong>
        </Typography>
        {nodes.list.map((node) => (
          <Node
            node={node}
            blocks={blocks}
            key={node.url}
            expanded={node.url === this.state.expandedNodeURL}
            toggleNodeExpanded={this.toggleNodeExpanded}
          />
        ))}
      </Box>
    );
  }
}

Nodes.propTypes = {
  nodesActions: PropTypes.object.isRequired,
  blockActions: PropTypes.object.isRequired,
  nodes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    nodes: state.nodes,
    blocks: state.blocks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nodesActions: bindActionCreators(nodesActions, dispatch),
    blockActions: bindActionCreators(blockActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nodes);
