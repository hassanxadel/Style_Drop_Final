import type { OrderStatus } from '@/data/accountMock';

export function statusBadgeClass(status: OrderStatus): string {
  switch (status) {
    case 'delivered':
      return 'bg-emerald-100 text-emerald-800';
    case 'shipped':
      return 'bg-sky-100 text-sky-800';
    case 'returned':
      return 'bg-neutral-200 text-neutral-700';
    default:
      return 'bg-neutral-200 text-neutral-700';
  }
}

export function statusLabel(status: OrderStatus): string {
  switch (status) {
    case 'delivered':
      return 'Delivered';
    case 'shipped':
      return 'Shipped';
    case 'returned':
      return 'Returned';
    default:
      return status;
  }
}
