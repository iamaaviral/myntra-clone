import React from 'react';
import Loader from '../containers/Loader'

const withLoader = (WrappedComponent, pageName) => {

    const WithLoader = (props) => {

        let [isLoading, setoading] = React.useState(true);

        let setLoadingState = (isCompLoading) => {
            setoading(isCompLoading)
        }

        return (
            <>
                {
                    isLoading && <Loader page={pageName} />
                }

                <WrappedComponent {...props} setLoading={setLoadingState} />
            </>
        )
    }

    return WithLoader;
}

export default withLoader;
