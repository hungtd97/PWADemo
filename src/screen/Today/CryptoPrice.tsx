import React from 'react';
import PropTypes from 'prop-types';


export const CryptoPrice = (data: any) =>
	<div className={`col-sm-4 column ${data.currency}--section`}>
		<h5>${data.price}</h5>
		<p>1 {data.currency.toUpperCase()}</p>
	</div>;

CryptoPrice.propTypes = {
	price: PropTypes.number.isRequired,
	currency: PropTypes.string.isRequired,
};
