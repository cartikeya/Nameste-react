// - Use `clearInterval` to `fix the issue` caused by the `interval`
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor ");
  }
  
  componentDidMount() {
    console.log("parent component did mount");
    // this.timer = setInterval(() => {
    //   console.log("timeout")
    // }, 1000);
  }
  componentWillUnmount(){
    console.log("component will unmount");
    clearInterval(this.timer);

  }
  
  render() {
    console.log("parent render");
    return (
      <>
        <div>
          <h1>Founders</h1>
          {/* <User name={"Cartikeya (function)"} location={"vizag"}/> */}
          {/* <UserClass name={"Cartikeya (class)"} location={"india"} /> */}
          <UserClass name={"Cartikeya (class)"} location={"india"} />
        </div>
      </>
    );
  }
}

export default About;
