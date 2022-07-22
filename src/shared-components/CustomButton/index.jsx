import React from 'react';

import './CustomButton.scss';

function CustomButton({
  value,
  onClick,
  className,
  ...otherProps
}) {
  return (
    <button className={`c-btn c-btn--${className}`} onClick={onClick} {...otherProps}>
      {value}
    </button>
  )
}

export default CustomButton;
