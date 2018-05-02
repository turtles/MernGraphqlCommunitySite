import React, {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class PaginationControl extends Component {
  constructor(props){
    super(props);

    this.state = {
      pages: 8,
      activePage: 3,
      route: '/articles/'
    }
  }

  renderPaginationItems() {
    let paginations = [];
    let current;
    // Left arrow
    paginations.push(
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
    );
    for (let i = 0; i < this.state.pages; ++i) {
      current = i+1; // + start page
      paginations.push(
        <PaginationItem>
          <PaginationLink href={(current === this.state.activePage) ? "#" : `${this.state.route}${current}`}>
            {current}
          </PaginationLink>
        </PaginationItem>
      )
    }
    paginations.push(
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
    );
    paginations[this.state.activePage].active = true;
    paginations[0].disabled = this.state.activePage===1;
    paginations[this.state.pages+1].disabled = this.state.activePage===this.state.pages;
    return paginations;
  }
  render() {
    return (
      <Pagination>
        {this.renderPaginationItems()}
      </Pagination>
    );
  }
}
