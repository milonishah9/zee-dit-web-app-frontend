import React from "react";
import Tree from "react-d3-tree";
import orgChartJson from "./data/org-chart.json";
import { useCenteredTree } from "./helpers";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Button, IconButton } from "@material-ui/core";
import "./sstyles.css";

const containerStyles = {
  width: "100vw",
  height: "100vh",
  background: "#eee"
};

const useStyles = makeStyles(
  createStyles({
    button: {
    },
    name: {
      fontSize: "16px"
    },
    edit: {
      position: "absolute",
      top: "0px",
      right: "0px",
      color: "#4BA083"
    },
    attributes: {
      position: "absolute",
      bottom: "5px",
      right: "10px"
    }
  })
);

// Here we're using `renderCustomNodeElement` render a component that uses
// both SVG and HTML tags side-by-side.
// This is made possible by `foreignObject`, which wraps the HTML tags to
// allow for them to be injected into the SVG namespace.
const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
  classes
}) => (
  <>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <Button
        className={classes.button}
        variant="contained"
        onClick={toggleNode}
        style={{ color: "black", background: "white", "border-radius": "21px", "border": "1px solid blue"  }}
      >
        <div className={classes.name}>{nodeDatum.name}</div>
    
        <div className={classes.attributes}>
       
        </div>
      </Button>
    </foreignObject>
  </>
);

export default function App() {
  const classes = useStyles();
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 300, y: 250 };
  const separation = { siblings: 1, nonSiblings: 2 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -125 };

  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        data={orgChartJson}
        translate={translate}
        nodeSize={nodeSize}
        separation={separation}
        transitionDuration="1000"
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, classes })
        }
        orientation="vertical"
      />
    </div>
  );
}
