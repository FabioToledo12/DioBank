import { multiplica, soma } from "./soma";

describe('soma', () => {
  it('deve somar 2 numeros informado e retornar 3', () => {
    const value = soma(1, 2);
    
    expect(value).toBe(3);
  });

  it('deve multiplicar 2 numeros informado e retornar 6', () => {
    const value = multiplica(2, 3);

    expect(value).toBe(6);
  });

  it('deve informar um erro com o multiplicador 2 e 3', () => {
    const value = multiplica(2, 4);

    expect(value).toBe("Multiplicador não aceito");
  });
});