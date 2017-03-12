const mockReservations = {
  1: { balance: 100 },
  2: { balance: 24.23 },
  3: { balance: 50.43 }
}

export function getReservationBalance (reservation_id) {
  return mockReservations[reservation_id].balance;
};

export function deductFromBalance (balance, debit) {
  return balance - debit
}
