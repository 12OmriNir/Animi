import React from "react";

export default withRouter = (Component) => (props) => {
  const params = useParams();
  return <Component {...props} params={params} />;
};

// function withRouter(Component) {
//   const params = useParams();
//   return function (props) {
//     return <Component {...props} params={params} />;
//   };
// }
