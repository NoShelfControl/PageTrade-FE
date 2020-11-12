import React from 'react';
import styles from './Book.css';
import PropTypes from 'prop-types';

class Book extends React.Component {
  render() {
    const { provided, innerRef } = this.props;
    return (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={innerRef}>
        <img src={this.props.src} alt={this.props.name} />
        <div className={styles.name}>{this.props.name}</div>
      </div>
    );
  }
}

Book.propTypes = {
  provided: PropTypes.any.isRequired,
  innerRef: PropTypes.any.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Book;
