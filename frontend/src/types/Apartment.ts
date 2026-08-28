export interface Apartment {
    id: number;
    address: string;
    city: string;
    squareMeters: number;
    purchasePrice?: number | null;
    constructionYear?: number | null;
    downPayment?: number | null;
    notaryFees?: number | null;
    brokerFees?: number | null;
    fileFees?: number | null;
    guaranteeFees?: number | null;
}