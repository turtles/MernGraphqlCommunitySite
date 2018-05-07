import React, { Component } from 'react';
import {
  Row, Col,
  Form, Input, Button
} from 'reactstrap'
import { withRouter } from 'react-router-dom';

class ArticlesFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textSearch: '',
      sortBy: 'new'
    }

    this.onSubmit=this.onSubmit.bind(this);
    this.onChangeTextSearch = this.onChangeTextSearch.bind(this);
    this.onChangeSortBy = this.onChangeSortBy.bind(this);
  }
  onSubmit(e){
    e.preventDefault();

    const route = `/articles/search/${this.state.textSearch}/+/${this.state.sortBy}`;
    this.props.history.push(route);
  }
  onChangeTextSearch(e) {
    this.setState({
      textSearch: e.target.value
    });
  }
  onChangeSortBy(e) {
    this.setState({
      sortBy: e.target.value
    });
  }
  render() {
    return (
      <div className='articles-searchbox'>
        <h4>Search articles</h4>
          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col>
                <Input
                  type="text"
                  value={this.state.textSearch}
                  onChange={this.onChangeTextSearch} />
              </Col>
              <Col>
                <Input type="select"
                  value={this.state.sortBy}
                  onChange={this.onChangeSortBy}>
                  <option>popular</option>
                  <option>newest</option>
                  <option>oldest</option>
                </Input>
              </Col>
              <Col>
                <Button type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
      </div>
    );
  }
}

export default withRouter(ArticlesFilter);
