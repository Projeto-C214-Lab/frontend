# Frontend
Repositório criado para armazenar os códigos de frontend do projeto 

## Passo a passo para a criação do projeto
1. Instalar o Angular CLI globalmente:
```
npm install -g @angular/cli
```

2. Criar workspace:
```
ng new conversorMoedas
```

3. Instalação do bootstrap:
```
npm install ngx-bootstrap
```

4. Criar um service:
```
ng g s conversor
```

## API
Para pegar os valores para a conversão foi utilizada uma <a href="https://currencyapi.net/api/v1/rates?key=7fJmthJ5y54Tb2QPTOvfcANcrSlozkosssGs&base=USD">API</a>.
- Esta API é paga, porém possui uma versão grátis (com acesso reduzido), a qual foi utilizada para o desenvolvimento do projeto.
- É necessário registrar-se no site do criador para receber uma chave de acesso de acordo com o plano, essa chave será usada para conectar com a API.
- Para conectar com a API e realizar as requisições foi criado um "Service", nele foi criada uma função do tipo "Observable", a qual retorna a consulta na API.
```TypeScript
  RealizarConversao(): Observable<any>{
    const apiKey = "<CHAVE GERADA NO SITE>";
    const url = `https://currencyapi.net/api/v1/rates?key=${apiKey}&base=USD`;

    return this.http.get<any>(url);
  }
```

## Execução do projeto
Para rodar a aplicação localmente:
1. Clone este repositório em sua mpaquina
2. Em seguida acesse o diretório:
```
cd conversorMoedas
```
3. Depois execute o comando a seguir:
```
ng serve
```
4. Será exibido no terminal o link para acessar

## Referências

### <a href="https://github.com/angular/angular-cli">Documentação Angular CLI</a>
### <a href="https://currencyapi.net/">Documentação API</a>

