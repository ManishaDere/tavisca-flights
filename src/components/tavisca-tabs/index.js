import React from 'react';
import PropTypes from 'prop-types';
import './tavisca-tabs.scss';
import { useHistory, useParams } from 'react-router-dom';

const Tabs = ({ tabs }) => {
  const history = useHistory();
  const { page: activeTab = 'flights' } = useParams();

  if (!tabs.length) {
    return null;
  }

  const handleTabSelection = (id) => {
    history.push(`/${id}`);
  };

  const headers = tabs.map((tab) => {
    const { header, id } = tab;
    return (
      <li
        className={`tavisca-tabs__tab flex ${activeTab === id ? 'active' : ''}`}
        onClick={() => handleTabSelection(id)}
        key={id}
      >
        {header}
      </li>
    );
  });

  const panels = tabs.map((tab) => {
    const { content, id } = tab;
    return (
      <div
        className={`tavisca-tabs__panel ${activeTab === id ? 'active' : ''}`}
        key={id}
      >
        {content}
      </div>
    );
  });

  return (
    <div className="tavisca-tabs">
      <ul className="tavisca-tabs__list">{headers}</ul>
      {panels}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      header: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tabs;
