import React from "react";
import PropTypes from "prop-types";
const Testing = ({ advice }) => {
  return (
    <>
      <p>{advice.advice}</p>
    </>
  );
};
Testing.propTypes = {
  advice: PropTypes.shape({
    advice: PropTypes.string,
    id: PropTypes.number,
  }),
  key: PropTypes.number,
};
export default Testing;
