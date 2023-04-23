

import { Arg, Args, Field, InputType, ObjectType, Query, Resolver, UseMiddleware } from 'type-graphql';


@InputType()
export class SampleQueryInput {
  @Field()
  message: string;
}

@ObjectType()
export class SampleQueryOutput {
  @Field()
  response: string;

  constructor(response: string) {
    this.response = response;
  }
}

@Resolver()
export default class SampleQuery {
  @Query((returns) => SampleQueryOutput)
  async sampleQuery(
    @Arg('data') data: SampleQueryInput,

  ): Promise<SampleQueryOutput> {
    return new SampleQueryOutput("eh");
  }
}
