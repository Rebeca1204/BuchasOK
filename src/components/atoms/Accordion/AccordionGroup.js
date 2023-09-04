import React, { useState } from "react";
import PropTypes from "prop-types";

const AccordionGroup = ({ children }) => {
  const [openItem, setOpenItem] = useState(-1);
  return React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      open: index === openItem,
      onChange: () => {
        if (index === openItem) setOpenItem(-1);
        else setOpenItem(index);
      },
    }),
  );
};

AccordionGroup.defaultProps = {
  children: undefined,
};

AccordionGroup.propTypes = {
  children: PropTypes.node,
};

export default AccordionGroup;
