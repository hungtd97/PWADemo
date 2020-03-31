import React from 'react';
import PropTypes from 'prop-types';


export const Employee = (data: any) =>
    <div className="text-center mt-2 mb-2 ml-2 mr-2 text-white" key={data.key}>
        <h5>{data.data}</h5>
    </div>;

