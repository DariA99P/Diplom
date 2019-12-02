import React from 'react';
import { Icon, Tooltip } from 'antd';
import { SUPPORT_URL } from '../../../../utils/constants';
import './ContactSupportTeam.css';

const ContactSupportTeam = () => (
  <Tooltip title="Contact support team">
    <a target="_blank" rel="noopener noreferrer" href={SUPPORT_URL} className="iconBox">
      <Icon type="message" style={{ fontSize: '18px', color: 'white' }} />
    </a>
  </Tooltip>
);

export default ContactSupportTeam;
