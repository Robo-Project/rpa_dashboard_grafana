import * as React from 'react';
import { useState, useEffect } from 'react';
import { JobInterface } from 'types';
import jenkinsService from './jenkinsService';
import Trigger from './Trigger';

function App() {
  const [jobs, setJobs] = useState<JobInterface[]>([]);

  useEffect(() => {
    jenkinsService.getAllJobs().then(jobs => setJobs(jobs));
  }, []);

  return (
    <div className="gf-form-group">
      {jobs.map((job, i) => {
        return <Trigger label="launch job" job={job.name} parameters="" />;
      })}
    </div>
  );
}

export default App;
