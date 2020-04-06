import * as React from 'react';
import jenkinsService from './jenkinsService';

type TriggerProps = {
  label: any;
  job: any;
  parameters: any;
};

const Trigger: React.FunctionComponent<TriggerProps> = ({ label, job, parameters }: TriggerProps) => {
  return (
    <div className="gf-form">
      <label className="gf-form-label width-10"> {job} </label>
      <button className="gf-form-btn btn-secondary width-10" type="button" onClick={() => jenkinsService.build(job, parameters)}>
        {label}
      </button>
    </div>
  );
};

export default Trigger;
