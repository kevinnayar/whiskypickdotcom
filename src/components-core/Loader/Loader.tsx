import * as React from 'react';

const Loader = React.memo(() => {
  return (
    <div className="loader">
      <div className="spinner" />
    </div>
  );
});

export default Loader;