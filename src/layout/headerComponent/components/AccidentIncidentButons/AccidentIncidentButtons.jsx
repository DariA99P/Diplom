import React from 'react';
import { Button } from 'antd';
import store from '../../../../redux/store';

import {
  CENTRIK_ACCESS_URL,
  CENTRIK_ACCIDENT_WORKFLOW_ID,
  CENTRIK_INCIDENT_WORKFLOW_ID,
} from '../../../../utils/constants';

import './AccidentIncidentButtons.css';

const AccidentIncidentButtons = () => {
  const { keycloak } = store.getState();

  return (
    keycloak.hasRealmRole
    && keycloak.hasRealmRole('AG-ECN-Launch-Emergency-Communication')
    && (
      <div className="accident-incident-box">
        <Button className="ant-btn-danger accident-btn">
          <a href={`${CENTRIK_ACCESS_URL}?WorkflowDefinitionId=${CENTRIK_ACCIDENT_WORKFLOW_ID}&token=${keycloak.token}`} target="_blank" rel="noopener noreferrer">
            Accident
          </a>
        </Button>
        <Button className="ant-btn-warning incident-btn">
          <a href={`${CENTRIK_ACCESS_URL}?WorkflowDefinitionId=${CENTRIK_INCIDENT_WORKFLOW_ID}&token=${keycloak.token}`} target="_blank" rel="noopener noreferrer">
            Incident
          </a>
        </Button>
      </div>
    ));
};

export default AccidentIncidentButtons;
