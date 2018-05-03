import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class PaginationControl extends Component {
  constructor(props){
    super(props);

    this.state = {
      route: '/articles/'
    }
  }
  renderSinglePaginationItem(page) {
    if (page === this.props.activePage) {
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
  renderLeftArrow(disabled) {
    return disabled ? (
      <PaginationItem disabled>
        <PaginationLink previous href="#" />
      </PaginationItem>
    ) : (
      <PaginationItem>
        <PaginationLink previous
          href={`${this.state.route}${this.props.activePage-1}`} />
      </PaginationItem>
    );
  }
  renderRightArrow(disabled) {
    return disabled ? (
      <PaginationItem disabled>
        <PaginationLink next href="#" />
      </PaginationItem>
    ) : (
      <PaginationItem>
        <PaginationLink next
          href={`${this.state.route}${this.props.activePage+1}`} />
      </PaginationItem>
    )
  }
  renderPaginationItems() {
    let paginations = [];

    const leftArrow = this.renderLeftArrow(this.props.activePage === 1);
    paginations.push(leftArrow);

    for (let i = 0; i < this.props.pages; ++i) {
      paginations.push(
        this.renderSinglePaginationItem(i+1)
      );
    }

    const rightArrow = this.renderRightArrow(this.props.activePage === this.props.pages);
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

PaginationControl.PropTypes = {
  pages: PropTypes.number,
  activePages: PropTypes.number
};

PaginationControl.defaultProps = {
  pages: 1,
  activePage: 1
}

export default PaginationControl;
