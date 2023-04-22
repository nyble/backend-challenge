import { NonEmptyArray, buildSchema } from 'type-graphql';
import SampleQuery from './query/SampleQuery';
import RoutePayment from './query/RoutePayment';

export const resolvers = [
  SampleQuery,
  RoutePayment
] as const;

export const schema = buildSchema({ resolvers });
