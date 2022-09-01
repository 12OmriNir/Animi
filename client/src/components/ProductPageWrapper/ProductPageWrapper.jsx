// ====================== //
// ProductPageWrapper.jsx //
// ====================== //

import React from 'react'

export default withRouter = ProductPageWrapper => props => {
    const params = useParams()
    return (<ProductPageWrapper {...props} params={params} />)
}