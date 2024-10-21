import { RootRoutes } from "./routes";
import BodyClassManager from "./class-manager/body-class-toggle"
import { useSelector } from "react-redux";
import { withErrorBoundary } from "react-error-boundary";
import Registration from "./views/Registration/Registration";
// import { NotFound } from "./views/404/not found";

import { DiscountForm } from "./views/discount-form/discount-form";
 const App = () => {


  return (
    <>
    <RootRoutes/>
        {/* <DiscountForm/> */}
         {/* <Registration/> */}
         
      {/* <BodyClassManager isthemeDark={theme}  />
      <RootRoutes /> */}
    </>
  );
};

export default App