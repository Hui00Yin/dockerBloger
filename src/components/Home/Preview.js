import React from 'react';
import './Preview.css';
import PropTypes from 'prop-types'

class Preview extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    push: PropTypes.func,
  };

  handleNavigate(id, e) {
    // 阻止原生链接跳转
    e.preventDefault();

    this.props.push(`/detail/${id}`);
  }

  render() {
    return (
      <article className="article-preview-item">
        <h1 className="title">
          <a href={`/detail/${this.props.id}`} onClick={this.handleNavigate.bind(this, this.props.id)}>
            {this.props.title}
          </a>
        </h1>
        <span className="date">{this.props.date}</span>
        <p className="desc">{this.props.description}</p>
      </article>
    );
  }
}

export default Preview;
