import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArticleRow = styled(Row)`

`;

const ProfileArticle = ({ id, title, views, date }) => {
  return (
    <ArticleRow>
      <Col xs={6} sm={9}>
        <Link to={`/articles/view/${id}`}>
          {title}
        </Link>
        <p>
        Some text
        </p>
      </Col>
      <Col xs={6} sm={3} className="float-right">
        <p>Last updated {date}</p>
        <p>{views} views</p>
      </Col>
    </ArticleRow>
  );
}

ProfileArticle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ProfileArticle;
