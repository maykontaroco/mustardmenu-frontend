export interface PaymentType {
  description: string;
  icon: string;
}

export const PaymentTypes: PaymentType[] = [
  { description: 'Dinheiro', icon: 'payments' },
  { description: 'PIX', icon: 'payments' },
  { description: 'Cartão de Crédito', icon: 'credit_card' },
  { description: 'Cartão de Débito', icon: 'credit_card' },
];
