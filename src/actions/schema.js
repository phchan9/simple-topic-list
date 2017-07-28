import { schema } from 'normalizr';

export const topic = new schema.Entity('topics');
export const arrayOfTopics = new schema.Array(topic);
