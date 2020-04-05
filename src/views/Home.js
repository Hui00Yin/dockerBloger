import React from 'react';
import { connect } from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import { actions } from './HomeRedux';
import { push } from 'connected-react-router';

const mapStateToProps = state => ({
    articleList: state.home.list.articleList,
    error: state.home.list.error,
    loading: state.home.list.loading,
})

const mapDispatchToProps = (dispatch) => {
  return{
    push: (path) => dispatch(push(path)),
    loadArticles: () => dispatch(actions.loadArticles()),
  }
}


class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2> Home2 </h2>
        <PreviewList {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
