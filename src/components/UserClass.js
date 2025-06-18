import React from "react";
// const formik = useformik();
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2: 3,

      userInfo: { login: "dummy name" },
    };
    console.log("child constructor ");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/cartikeya");
    const json = await data.json();
    // console.log(json);
    this.setState({ userInfo: json });

    console.log(json);
  }

  render() {
    console.log("child render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>count: {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          click to increment
        </button>
        <img src={this.state.userInfo.avatar_url}/>
        <h1>Name: {this.state.userInfo.login}</h1>
        <h2>Location: {location}</h2>
        <h2>contact: @uday.unreal</h2>
      </div>
    );
  }
}

export default UserClass;
