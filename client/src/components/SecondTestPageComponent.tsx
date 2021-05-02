import React from "react";
import { Grid, Header, Segment } from "semantic-ui-react";

export const SecondTestPageComponent = (): JSX.Element => {

  return (
    <Grid.Column textAlign="center" width={16}>
      <Segment placeholder>
        <Header>
          This is the second page test content
        </Header>
      </Segment>
    </Grid.Column>
  );
};
