export type PriceQuery = { destination: string; checkIn: string; checkOut: string; people: number };
export type PriceQuote = { source: string; currency: string; hotelTotal?: number; transportTotal?: number; fetchedAt: string };

export interface PriceSource {
  name: string;
  isConfigured(): boolean;
  quote(query: PriceQuery): Promise<PriceQuote | null>;
}

/** Real-time provider boundary. Keep provider keys server-side when enabled. */
export const unavailablePriceSource: PriceSource = {
  name: "未连接实时供应商",
  isConfigured: () => false,
  quote: async () => null,
};
