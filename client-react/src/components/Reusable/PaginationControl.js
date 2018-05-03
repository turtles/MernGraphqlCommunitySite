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
        <PaginationItem key={page} active>
          <PaginationLink href="#">
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    } else {
      return (
        <PaginationItem key={page}>
          <PaginationLink href={`${this.state.route}${page}`}>
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }
  }
  renderLeftArrow(disabled) {
    return disabled ? (
      <PaginationItem key={-2} disabled>
        <PaginationLink previous href="#" />
      </PaginationItem>
    ) : (
      <PaginationItem key={-2}>
        <PaginationLink previous
          href={`${this.state.route}${this.props.activePage-1}`} />
      </PaginationItem>
    );
  }
  renderRightArrow(disabled) {
    return disabled ? (
      <PaginationItem key={-1} disabled>
        <PaginationLink next href="#" />
      </PaginationItem>
    ) : (
      <PaginationItem key={-1}>
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

PaginationControl.propTypes = {
  pages: PropTypes.number,
  activePages: PropTypes.number
};

PaginationControl.defaultProps = {
  pages: 1,
  activePage: 1
}

export default PaginationControl;
