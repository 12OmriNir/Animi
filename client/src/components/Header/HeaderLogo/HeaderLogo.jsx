// ============== //
// HeaderLogo.jsx //
// ============== //

import React from 'react'

/**
 * This component is the image logo.
 */
export default function HeaderLogo() {
    return (
        <div className='row'>
            <div className='col'>
                <img id='logoImage'
                    className="d-inline-block align-text-top"
                    alt='Logo'
                    style={{ height: "120px", width: "120px" }}

                    // !!! DO NOT DELETE !!!
                    // This very long string is the encoded image itself.
                    src='data:image/jpeg;base64,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' />
            </div>
            <div className='col'>
                <h1>Best Anime Shop !!!</h1>
            </div>
        </div>)
}