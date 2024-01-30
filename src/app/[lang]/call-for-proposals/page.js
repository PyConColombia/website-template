import React from 'react';
import PropTypes from 'prop-types';

import CallSpeakers from '@/app/[lang]/components/commons/CallSpeakers';
import Title from '@/app/[lang]/components/commons/Title';

const CallForProposals = ({ params: { lang } }) => {
  return (
    <>
      <Title />
      <CallSpeakers />
    </>
  );
};

CallForProposals.propTypes = {
  params: PropTypes.shape({
    lang: PropTypes.string.isRequired
  }).isRequired
};

export default CallForProposals;
