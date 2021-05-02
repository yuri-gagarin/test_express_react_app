import React from "react";
import { Grid, Header, Image, Menu, Segment } from "semantic-ui-react";
// router //
import { Route, useHistory } from "react-router-dom";
// components //
import { FirstTestPageComponent } from "./FirstTestPageComponent";
import { SecondTestPageComponent } from "./SecondTestPageComponent";
import type { MenuItemProps } from "semantic-ui-react";

export const HomeComponent = (): JSX.Element => {
  const [ activeMenuItem, setActiveMenuItem ] = React.useState<string>("home");
  const history = useHistory();

  const handleItemClick = (_e: React.MouseEvent, { name } : MenuItemProps) => {
    switch (name) {
      case "home": {
        setActiveMenuItem("home");
        history.push("/");
        break;
      };
      case "firstPage": {
        setActiveMenuItem("firstPage");
        history.push("/first");
        break;
      };
      case "secondPage": {
        setActiveMenuItem("secondPage");
        history.push("/second");
        break;
      };
      default: {
        history.push("/");
      };
    }
  };

  return (
    <Grid>
      <Grid.Row style={{ width: "100%" }}>
        <Segment placeholder textAlign="center" style={{ width: "100%" }}>
          <Header>This is a test App Page</Header>
        </Segment>
      </Grid.Row>
      <Grid.Row centered>
        <Menu>
          <Menu.Item
            name='home'
            active={ activeMenuItem === 'editorials' }
            content="Home"
            onClick={ handleItemClick } 
          />
          <Menu.Item
            name='firstPage'
            content="First Page"
            active={ activeMenuItem === 'firstPage' }
            onClick={ handleItemClick } 
          />
          <Menu.Item
            name='secondPage'
            content="Second Page"
            active={ activeMenuItem === 'secondPage' }
            onClick={ handleItemClick } 
          />
        </Menu>
      </Grid.Row>
      <Grid.Row>
        <Route path="/" exact={ true }> 
          <Grid stackable columns={ 2 }>
            <Grid.Row>
              <Grid.Column>
                <Segment>
                  <Image src='https://react.semantic-ui.com//images/wireframe/paragraph.png' />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <Image src='https://react.semantic-ui.com//images/wireframe/paragraph.png' />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Route>
        <Route path="/first" exact={ true }> 
          <FirstTestPageComponent />
        </Route>
        <Route path="/second" exact={ true }> 
          <SecondTestPageComponent />
        </Route>
      </Grid.Row>
    </Grid>
  );
};
