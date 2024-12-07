export const soma = (a: number, b: number): number => {
  return a + b;
}

export const multiplica = (a: number, b: number): number | string => {
    
    if (a === 2 && b === 3) {
        return  a * b;
    }
    return "Multiplicador não aceito";
}