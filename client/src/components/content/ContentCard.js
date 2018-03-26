import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  min-height: 300px;
  border: 1px solid #CCC;
  background: #EEE;
`;

const ContentCard = (props)=> (
  <Card>
    <h3>{props.title}</h3>
    <p>{props.children}</p>
  </Card>
)

export default ContentCard;
