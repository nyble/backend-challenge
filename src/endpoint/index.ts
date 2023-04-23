import { NonEmptyArray, buildSchema } from 'type-graphql';
import SampleQuery from './query/SampleQuery';

export const resolvers = [
  SampleQuery
] as const;

export const schema = buildSchema({ resolvers });
