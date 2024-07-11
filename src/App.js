import React from "react";
// import AnotherComponent from "./CustomHooks/Example-1/PageTitleTwo";
// import ParentComponent from "./CustomHooks/Example-1/PageTitleOne";
// import ParentComponent1 from "./CustomHooks/Example.2/FirstCounter";
// import SecondCounter from "./CustomHooks/Example.2/SecondCounter";
import FirstAPI from "./CustomHooks/Example-3/FirstApi";
import SecondAPI from "./CustomHooks/Example-3/SecondApi";
const  App = () => {
  return (
    <div className="container">
      {/* <ParentComponent /> */}
      {/* <AnotherComponent/> */}
      {/* <ParentComponent1 /> */}
      {/* <SecondCounter /> */}
      <FirstAPI />
      <SecondAPI />
    </div>
  );
}

export default App;
