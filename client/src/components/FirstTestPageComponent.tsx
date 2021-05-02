import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";

export const FirstTestPageComponent = (): JSX.Element => {

  return (
    <Grid.Column textAlign="center" width={16} >
      <Segment placeholder>
        <Header>
          This is the first page test content
        </Header>
      </Segment>
    </Grid.Column>
  );
};
