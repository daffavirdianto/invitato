import React from 'react';

const Button = ({ onClick }) => {
  return (
    <div className="button" onClick={() => window.location.href = "#page-2"}>
        <button>Open</button>
    </div>
  );
};

export default Button;