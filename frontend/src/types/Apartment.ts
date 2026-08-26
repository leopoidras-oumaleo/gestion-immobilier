export interface Apartment {
    id: number;
    address?: string;
    city?: string;
    purchasePrice?: number;
    squareMeters?: number;
    constructionYear?: number;
    downPayment?: number;
    notaryFees?: number;
    brokerFees?: number;
    fileFees?: number;
    guaranteeFees?: number;
    propertyTax?: number;
}