import React from "react";
import { Redirect, Link } from "react-router-dom";

function ScreenMessage(props) {
  const setHome = () => {
    props.setRedirectHome(true);
  };

  return (
    <React.Fragment>
      {props.ADRSubmitMsg.msg.length > 0 && (
        <React.Fragment>
          <h2 className="titleColour">{props.ADRSubmitMsg.msg}</h2>

          {props.ADRSubmitMsg.state && (
            <Link to={"/softwares/all"}>
              <button>View ADR List</button>
            </Link>
          )}
        </React.Fragment>
      )}
      {props.redirectHome && <Redirect to="/home" />}
    </React.Fragment>
  );
}

export default ScreenMessage;
