

import { Arg, Args, Field, InputType, ObjectType, Query, Resolver, UseMiddleware, Int } from 'type-graphql';
import { Provider } from 'types/Provider';
import providers from '../../constants/providers'

@InputType()
export class PaymentMethod {
  @Field()
  type: string
  
  @Field()
  network: string
  
  @Field()
  brand: string

  @Field()
  funding_type: string
}

@InputType()
export class RoutePaymentInput {
  @Field(type => Int)
  amount: number;

  @Field(type => PaymentMethod)
  payment_method: PaymentMethod;
}

@ObjectType()
export class RoutePaymentOutput {
  @Field()
  provider_id: string;

  @Field()
  provider_name: string;

  @Field(type => Int)
  cost: number;

  constructor(provider_id: string, provider_name: string, cost: number) {
    this.provider_id = provider_id
    this.provider_name = provider_name
    this.cost = cost
  }
}

@Resolver()
export default class RoutePayment {
  @Query((returns) => RoutePaymentOutput)
  async routePayment(
    @Arg('data') data: RoutePaymentInput,

  ): Promise<RoutePaymentOutput> {

    let cost = data.amount
    let providerName = ""
    let providerId = ""
    
    for (let i = 0; i < providers.length; i++) {
      const providerCost = providers[i].costOfTransaction(
        data.amount, 
        data.payment_method.type, 
        data.payment_method.network,
        data.payment_method.brand,
        data.payment_method.funding_type
      )
      if(cost > providerCost && providerCost > 0) {
        cost = providerCost
        providerName = providers[i].name
        providerId = providers[i].id
      }
    }
    
    return new RoutePaymentOutput(providerName, providerId, cost);
  }
}
