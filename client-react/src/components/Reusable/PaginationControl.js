import React, {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class PaginationControl extends Component {
  constructor(props){
    super(props);

    this.state = {
      pages: 8,
      activePage: this.props.activePage,
      route: '/articles/'
    }
  }
  renderSinglePaginationItem(page) {
    if (page === this.state.activePage) {
      return (
        <PaginationItem active>
          <PaginationLink href="#">
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    } else {
      return (
        <PaginationItem>
          <PaginationLink href={`${this.state.route}${page}`}>
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }
  }
  renderPaginationItems() {
    const { activePage } = this.state;
    let paginations = [];

    let leftArrow;
    if (activePage === 1) {
      leftArrow = (
        <PaginationItem disabled>
          <PaginationLink previous href="#" />
        </PaginationItem>
      );
    } else {
      leftArrow = (
        <PaginationItem>
          <PaginationLink next href={`${this.state.route}${activePage-1}`} />
        </PaginationItem>
      );
    }
    paginations.push(leftArrow);

    // Numbers (middle items)
    for (let i = 0; i < this.state.pages; ++i) {
      paginations.push(
        this.renderSinglePaginationItem(i+1)
      );
    }

    let rightArrow;
    if (activePage === this.state.pages) {
      rightArrow = (
        <PaginationItem disabled>
          <PaginationLink next href="#" />
        </PaginationItem>
      )
    } else {
      rightArrow = (
        <PaginationItem>
          <PaginationLink next href={`${this.state.route}${activePage+1}`} />
        </PaginationItem>
      );
    }
    paginations.push(rightArrow);

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
