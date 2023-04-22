import Interchange from '../constants/interchange'

export class Pricing {
    interchange: boolean;
    flatRate: number;
    commission: number;

    constructor(
        interchange: boolean,
        flatRate: number,
        commission: number, 
    ) {
        this.interchange = interchange,
        this.flatRate = flatRate,
        this.commission = commission
    }

    calculatePrice(amount: number, brand: string): number {
        var cost = 0
        if (this.interchange)
            cost += Interchange[brand].fees * amount
        cost += this.flatRate + this.commission*amount
        return Math.round(cost)
    }

} 

export class SpecialPricing extends Pricing {
    brand: string

    constructor(
        interchange: boolean,
        flatRate: number,
        commission: number,
        brand: string,
    ) {
        super(interchange,flatRate,commission)
        this.brand = brand
    }
}

export class Provider {
    name: string;
    id: string;
    fundingCapabilities: string[];
    networkCapabilities: string[];
    pricing: Pricing
    specialPricing: SpecialPricing[]

    constructor(
        name: string,
        id: string,
        fundingCapabilities: string[],
        networkCapabilities: string[],
        pricing: Pricing,
        specialPricing: SpecialPricing[]
    ) {

        this.name = name
        this.id = id
        this.fundingCapabilities = fundingCapabilities
        this.networkCapabilities = networkCapabilities
        this.pricing = pricing
        this.specialPricing = specialPricing
    }

    canProcessTransaction(fundingType: string, network: string): boolean {
        return this.fundingCapabilities.includes(fundingType) && this.networkCapabilities.includes(network)
    }

    costOfTransaction(amount: number, type: string, network: string, brand: string, fundingType: string): number {
        let cost = 0

        if (!this.canProcessTransaction(fundingType, network))
            return -1
        
        if (this.specialPricing.length > 0) {

            // Matches the current transaction with all the special pricing rules available for the provider
            for(let i = 0; i < this.specialPricing.length; i++) {
            
                if (this.specialPricing[i].brand === brand)
                    cost = this.specialPricing[i].calculatePrice(amount, brand)
            }
            
        } else {
            cost = this.pricing.calculatePrice(amount, brand)
        }
        return cost
    }

}