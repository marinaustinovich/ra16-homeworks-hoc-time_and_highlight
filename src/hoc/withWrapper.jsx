import React from 'react';

const withWrapper = (WrappedComponent, WrapperComponent) => {
    return (props) => (
        <WrapperComponent>
            <WrappedComponent {...props} />
        </WrapperComponent>
    );
};

export default withWrapper;
