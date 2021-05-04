import React from "react";
import { Button, Grid, Header, Segment } from "semantic-ui-react";
import axios from "axios";
// types //
import type { AxiosRequestConfig, AxiosResponse } from "axios";

//
type TestResponse = {
  responseMsg: string;
  data: any & Object;
}
//
export const FirstTestPageComponent = (): JSX.Element => {

  const handleButtonClick = () => {
    const config: AxiosRequestConfig = {
      url: "/api/test_index_route",
      method: "GET"
    }
    return axios(config)
      .then((response: AxiosResponse<TestResponse>) => {
        const { data, status } = response;
        console.log("Status is: " + status);
        console.log("Data is: " + JSON.stringify(data));
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <Grid.Column textAlign="center" width={16} >
      <Segment placeholder>
        <Header>
          This is the first page test content
        </Header>
        <Button color="blue" onClick={ handleButtonClick } content="Click to test controller" />
      </Segment>
    </Grid.Column>
  );
};
