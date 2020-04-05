import React from 'react';
import Preview from './Preview';
import PropTypes from 'prop-types';

class PreviewList extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    articleList: PropTypes.arrayOf(PropTypes.object),
    loadArticles: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadArticles();
  }

  render() {
    const { loading, error, articleList } = this.props;
    console.log("Calling PreviewList, ", this.props);

    if (error) {
      return <p className="message">Oops, something is wrong.</p>;
    }

    if (loading) {
      return <p className="message">Loading...</p>;
    }

    return (
      <div>
        {articleList.map(item => {
          return <Preview {...item} key={item.id} push={this.props.push} />
        })}
      </div>
    );
  }
}

export default PreviewList;
