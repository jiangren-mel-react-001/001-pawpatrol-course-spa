import React from 'react';

let LoadingStatus = ({loading}) => (
    loading && <span>Loading...</span>
);

export default LoadingStatus;