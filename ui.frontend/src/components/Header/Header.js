import React from "react";
import {
  MapTo,
  withComponentMappingContext,
} from "@adobe/aem-react-editable-components";

export const HeaderEditConfig = {
  emptyLabel: "Header",

  isEmpty: function (props) {
    return !props || !props.title || props.title.trim().length < 1;
  },
};

function Header(props) {
  console.log("Header", props);
  if (HeaderEditConfig.isEmpty(props)) {
    return null;
  }

  return <h1 className="header">{props.title}</h1>;
}

MapTo("aem-react-demo/components/header")(
  withComponentMappingContext(Header),
  HeaderEditConfig
);
