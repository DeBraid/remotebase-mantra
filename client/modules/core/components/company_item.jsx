import React from 'react';
import classnames from 'classnames';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

import {pathFor} from '/client/modules/core/libs/helpers';
import OfficialIcon from './official_icon.jsx';

const CompanyItem = ({company, navToCompany}) => (
  <li className="col-xs-12">
    <a href={pathFor('company', {companySlug: company.slug})} className="company-item-link">
      <div className="company-item-container">
        <div className="row company-item mobile-company-item hidden-sm-up">
          <div className="col-xs-12 company-item-section">
            <img src={company.getLogoUrl()} alt={`${company.name}`} className="company-logo"/>
            <div className="company-meta">
              <h3 className="company-name">
                {company.name}
                <OfficialIcon company={company} />
              </h3>
              <div>
                <span className="company-label">
                  {company.getDistrbituedPercent() || '?'}% <i className="fa fa-globe"></i>
                </span>
                <span className="company-label">
                  {company.team_size || '?'} <i className="fa fa-users"></i>
                </span>
                <span className={classnames('company-label', {'label-hiring': company.is_hiring, 'label-not-hiring': !company.is_hiring})}>
                  {company.is_hiring ? 'Hiring' : 'Not hiring'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row company-item desktop-company-item hidden-sm-down">
          <div className="col-xs-12 col-sm-4 company-item-section">
            <div className="company-meta">
              <img src={company.getLogoUrl()} alt={`${company.name}`} className="company-logo"/>
              <h3 className="company-name">
                <OverlayTrigger overlay={<Tooltip arrowOffsetLeft={10}>{company.short_description || 'No description found'}</Tooltip>}
                  placement="bottom">
                  <span>{company.name}</span>
                </OverlayTrigger>
                <OfficialIcon company={company} />
              </h3>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8 company-item-section">
            <div className="distributed-ratio-label-container">
              <span className="company-label">
                {company.getDistrbituedPercent() || '?'}% distributed
              </span>
            </div>
            <div className="team-size-label-container">
              <span className="company-label">
                {company.team_size || '?'} people
              </span>
            </div>
            <div className="hiring-label-container">
              <span className={classnames('company-label', {'label-hiring': company.is_hiring, 'label-not-hiring': !company.is_hiring})}>
                {company.is_hiring ? 'Hiring' : 'Not hiring'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </li>
);

export default CompanyItem;
