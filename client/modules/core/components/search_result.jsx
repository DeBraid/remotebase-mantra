import React from 'react';

import CompanyList from '../containers/company_list';
import LoadMoreBtn from '../containers/load_more_button';
import Loading from '../containers/loading';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLoadMore() {
    const {onLoadMore, loadMore} = this.props;
    loadMore();
    onLoadMore();
  }

  render() {
    const {companyResultCount, limit, companies, isLoadingMore, isSearching} = this.props;

    if (isSearching) {
      return <Loading />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="search-result">
              <div className="counter">{companyResultCount} companies found</div>
              <CompanyList companies={companies} />
              {
                isLoadingMore ? <Loading /> : <span></span>
              }
              {
                limit < companyResultCount && !isLoadingMore ?
                <LoadMoreBtn onLoadMore={this.handleLoadMore.bind(this)}/> : <span></span>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResult;
