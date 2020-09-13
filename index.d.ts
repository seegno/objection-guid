import { Model } from 'objection';

interface Options {
  field?: string;
  generateGuid?: () => string | number;
}

export default function(options?: Options): <T extends typeof Model>(ClassModel: T) => T;
