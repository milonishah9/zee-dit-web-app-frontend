import React from 'react';

import Sankey, {
  Tooltip,
  Link,
  Node,
} from 'devextreme-react/sankey';

import { data } from '../NewSankey/data';

const NewSankey = () => {


    return (
      <Sankey id="sankey"
        dataSource={data}
        sourceField="source"
        targetField="target"
        weightField="weight"
      >
       

        <Tooltip
          enabled={false}
          customizeLinkTooltip={customizeLinkTooltip}
        >
        </Tooltip>

        <Link
          color="skyBlue">
        </Link>

        <Node
            padding={5}
            color="blue"
            width={8}
          >
        </Node>

      </Sankey>
    );
}



function customizeLinkTooltip(info) {
    return {
      html: `<b>From:</b> ${info.source}<br/><b>To:</b> ${info.target}<br/><b>Weight:</b> ${info.weight}`,
    };
  }



export default NewSankey;
