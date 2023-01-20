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
  background: "white"
};

const useStyles = makeStyles(
  createStyles({
    button: {
    },
    name: {
      fontFamily:"GothamBold",
      // fontSize: "18px",
      fontWeight:500,
      color:" #333333",
    },

    num: {
      fontSize: "15px",
      position: "absolute",
      right: "180px",
      bottom: "5px",
      color: "black"
    },
    
    UpAttributes: {
      fontSize: "15px",
      position: "absolute",
      bottom: "5px",
      right: "130px",
      color: "#4BA083"
    },
    DownAttributes: {
      fontSize: "15px",
      position: "absolute",
      bottom: "5px",
      right: "130px",
      color: "#f37b92"
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



    {!nodeDatum.attributes.per  && 
      <Button className="withoutPer" variant="contained" onClick={toggleNode}>
        <div className={classes.name}>{nodeDatum.name}</div>
      </Button>
    }

    {nodeDatum.attributes.per < 0 && 
      <Button className="DownButton" variant="contained" onClick={toggleNode}>
        <div className={classes.name}>{nodeDatum.name}</div>
          {
            nodeDatum.attributes.per && 
            <div className={classes.DownAttributes}>
                {nodeDatum.attributes.per + '% ↓'}           
                {/* <svg width="18" className="arrow"  height="18" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg> */}
              </div>
          }
          <div className={classes.num}>{nodeDatum.attributes.num }</div>
      </Button>
    }

    {nodeDatum.attributes.per > 0 && 
    <Button className="UpButton" variant="contained" onClick={toggleNode}>
        <div className={classes.name}>{nodeDatum.name}</div>
          {
            nodeDatum.attributes.per && 
              <div className={classes.UpAttributes}>
                {nodeDatum.attributes.per + '% ↑'}           
                {/* <svg width="18" className="arrow"  height="18" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg> */}
              </div>
          }
          <div className={classes.num}>{nodeDatum.attributes.num }</div>
      </Button>
    }

    </foreignObject>
  </>
);



export default function App() {
  const classes = useStyles();
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 300, y: 250 };
  const separation = { siblings: 1, nonSiblings: 1 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -125 };
  const draggable = false;
  const zoomable = false;
  const collapsible = true;
  return (
    <div>

    <div>
      {/* <label>
            <input type="checkbox"  />
            <span />
            <strong>fg</strong>
      </label> */}
    </div>

    <div style={containerStyles} ref={containerRef}>
      <Tree
        zoomable = {zoomable}
        draggable = {draggable}
        collapsible = {collapsible}
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
    </div>

  );
}
