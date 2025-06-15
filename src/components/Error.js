import { useRouteError } from "react-router";

const Error = () => {
  return (
    <div>
      {console.log(useRouteError())}
      <h1>This is error go back{useRouteError().data}</h1>
      <h4>{useRouteError().data}</h4>
      <h2>
        {useRouteError().status} - {useRouteError().statusText}
      </h2>
    </div>
  );
};

export default Error;
