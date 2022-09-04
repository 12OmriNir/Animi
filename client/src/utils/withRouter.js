import React from "react";
import { useParams } from "react-router-dom";

const withRouter = (Component) => (props) => {
  const params = useParams();
  return <Component {...props} params={params} />;
};

export default withRouter;

// function withRouter(Component) {
//   const params = useParams();
//   return function (props) {
//     return <Component {...props} params={params} />;
//   };
// }
