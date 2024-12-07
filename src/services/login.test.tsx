import { login } from "./login";


describe('login', () => {
  it('Deve exibir um alert com as boas vindas', () => {
    
    const mockAlert = jest.fn();
    window.alert = mockAlert;
    
    login()    
    // expect(mockAlert).toBeCalled(); // testa a chamada da funcao
    expect(mockAlert).toHaveBeenCalledWith('Bem vindo!'); //testar o retorno da funcao

  });
});