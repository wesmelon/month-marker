import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Body = () => (
  <Card>
    <CardHeader
      title="Hello you"
    />
    <CardActions>
      <FlatButton label="OK" />
      <FlatButton label="NO" />
    </CardActions>
    <CardText expandable={true}>
      Hello hello hello
    </CardText>
  </Card>
);

export default Body;
