export interface PaymentType {
  type: string;
  description: string;
  icon: string;
}

export const PaymentTypes: PaymentType[] = [
  {type: 'MONEY', description: 'Dinheiro', icon: 'payments' },
  {type: 'PIX', description: 'PIX', icon: 'payments' },
  {type: 'CREDIT_CARD', description: 'Cartão de Crédito', icon: 'credit_card' },
  {type: 'DEBIT_CARD', description: 'Cartão de Débito', icon: 'credit_card' },
];
