// types.ts
export interface Order {
  orderId: string;
  pickupLocation: string;
  dropLocation: string;
  customerName: string;
  earnAmount: number;
  isActive: boolean;
}

export type RootStackParamList = {
  OrderDetailsPage: { order: Order }; // Order object as a parameter
};
