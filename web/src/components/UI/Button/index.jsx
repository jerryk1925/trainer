import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Button.css';

export const Button = ({ children, type, theme, width }) => {
  return (
    <button
      className={classNames({
        [css.wrapper]: true,
        [css.primary]: theme === 'primary',
        [css.white]: theme === 'white',
        [css.fullWidth]: width === 'full',
        [css.contentWidth]: width === 'content',
      })}
      type={type}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  theme: 'primary',
  width: 'content',
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  theme: PropTypes.string,
  width: PropTypes.string,
};
