/**
 * Mock account data — mirrors Shopify customer / order objects for conversion.
 */

import productBiker from '@/assets/product-biker.jpg';
import productHoodie from '@/assets/product-hoodie.jpg';
import productTrench from '@/assets/product-trench.jpg';
import productAirforce from '@/assets/product-airforce.jpg';
import productPuffer from '@/assets/product-puffer.jpg';

export const profileUser = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  initials: 'AJ',
};

export const accountStats = {
  totalOrders: 4,
  likedItems: 0,
  savedAddresses: 2,
  cartItems: 4,
};

export type OrderStatus = 'delivered' | 'shipped' | 'returned';

export interface OrderLine {
  brand: string;
  name: string;
  sizeQty: string;
  price: string;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  itemCount: number;
  total: string;
  currency: string;
  status: OrderStatus;
  lines: OrderLine[];
}

export const orders: Order[] = [
  {
    id: 'DR-20482',
    date: 'Mar 15, 2026',
    itemCount: 2,
    total: '324.00',
    currency: 'USD',
    status: 'delivered',
    lines: [
      {
        brand: 'ARITZIA',
        name: 'Leather Biker Jacket',
        sizeQty: 'Size M · Qty 1',
        price: '$148',
        image: productBiker,
      },
      {
        brand: 'ESSENTIALS',
        name: 'Oversized Hoodie',
        sizeQty: 'Size L · Qty 1',
        price: '$88',
        image: productHoodie,
      },
    ],
  },
  {
    id: 'DR-19947',
    date: 'Mar 2, 2026',
    itemCount: 1,
    total: '110.00',
    currency: 'USD',
    status: 'shipped',
    lines: [
      {
        brand: 'NIKE',
        name: "Air Force 1 '07",
        sizeQty: 'Size 10 · Qty 1',
        price: '$110',
        image: productAirforce,
      },
    ],
  },
  {
    id: 'DR-19201',
    date: 'Feb 20, 2026',
    itemCount: 1,
    total: '235.00',
    currency: 'USD',
    status: 'delivered',
    lines: [
      {
        brand: 'CANADA GOOSE',
        name: 'Down Puffer Jacket',
        sizeQty: 'Size M · Qty 1',
        price: '$235',
        image: productPuffer,
      },
    ],
  },
  {
    id: 'DR-18756',
    date: 'Feb 1, 2026',
    itemCount: 1,
    total: '420.00',
    currency: 'USD',
    status: 'returned',
    lines: [
      {
        brand: 'ARCTERYX',
        name: 'Technical Parka',
        sizeQty: 'Size L · Qty 1',
        price: '$420',
        image: productTrench,
      },
    ],
  },
];

export const recentOrdersPreview = orders.slice(0, 2);

export interface SavedAddress {
  id: string;
  label: string;
  isDefault: boolean;
  lines: string[];
}

export const addresses: SavedAddress[] = [
  {
    id: '1',
    label: 'Home',
    isDefault: true,
    lines: [
      'Alex Johnson',
      '123 Fashion Avenue',
      'New York, NY 10001',
      'United States',
      '+1 (555) 012-3456',
    ],
  },
  {
    id: '2',
    label: 'Work',
    isDefault: false,
    lines: [
      'Alex Johnson',
      '456 Style Street, Suite 200',
      'Los Angeles, CA 90210',
      'United States',
      '+1 (555) 987-6543',
    ],
  },
];
