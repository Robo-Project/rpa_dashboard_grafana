export interface SimpleOptions {
  text: string;
}

export const defaults: SimpleOptions = {
  text: 'The default text!',
};

export interface JobInterface {
  name: string;
  url: string;
}

export interface TriggerInterface {
  label: string;
  job: string;
  parameter: string;
}
