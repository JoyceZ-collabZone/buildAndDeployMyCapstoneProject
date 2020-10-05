import React, { useState, useEffect } from "react";
import { RedocStandalone } from "redoc";
import { withRouter, useParams } from "react-router-dom";
import { getSwaggerObject, getAPIListingById } from "../api";

function SwaggerDefinition() {
  // console.log("use params callback", useParams());
  let { swaggerId } = useParams();
  console.log("logging params in swagger definition", swaggerId);
  let [swaggerstate, setSwaggerstate] = useState({});
  let [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    callAPIById();
  }, []);
  const callAPIById = async () => {
    const result = await getAPIListingById(swaggerId);
    console.log("logging swagger", result.Swagger);
    setSwaggerstate(result.Swagger);
    setLoadingState(false);
    console.log("logging swagger state", swaggerstate);
  };

  return (
    <React.Fragment>
      {loadingState && <p>Loading</p>}
      {!loadingState && <RedocStandalone spec={swaggerstate} />}
    </React.Fragment>
  );
}

export default withRouter(SwaggerDefinition);
