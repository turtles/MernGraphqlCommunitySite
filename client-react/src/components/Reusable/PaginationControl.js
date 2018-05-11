import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class PaginationControl extends Component {
  getPath() {
    const { pathname } = this.props.location;
    const { activePage } = this.props;

    let path = pathname;
    if (path.endsWith(`/${activePage}`)) {
        path = path.substring(0, path.lastIndexOf('/') + 1);
    }
    else if (!path.endsWith('/')) {
      path = `${path}/`;
    }

    return path;
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
          <PaginationLink href={`${this.getPath()}${page}`}>
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
          href={`${this.getPath()}${this.props.activePage-1}`} />
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
          href={`${this.getPath()}${this.props.activePage+1}`} />
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

export default withRouter(PaginationControl);
