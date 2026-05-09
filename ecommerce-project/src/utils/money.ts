export function formatMoney(amountCents: number) {
  //     if (amountCents < 0) {
  //     // There are several ways to solve this. This is one example:
  //     // - Switch the negative number to positive using * -1.
  //     // - Put the negative sign at the front of the result.
  //     amountCents = amountCents * -1;
  //     return `-$${((amountCents) / 100).toFixed(2)}`;
  //   }

  //   return `$${(amountCents / 100).toFixed(2)}`;
  
  const result = amountCents / 100;
  if (result < 0) return `-$${(-1 * result).toFixed(2)}`;
  return `$${result.toFixed(2)}`;
}
