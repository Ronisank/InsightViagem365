# InsightViagem

<p>Este projeto tem como objetivo desenvolver o MVP (Minimum Viable Product) de uma aplicação Back-End para uma plataforma de viagens sustentáveis.
A API Rest permitirá aos usuários explorar novos destinos,encontrar dicas de viagem sustentável e compartilhar suas experiências.</p>

<h3><em>Tecnologias e ferramentas utilizadas nesse projeto</em></h3>

**Node.js:** *Um ambiente de execução JavaScript, um engine*

**Express:** *Framework web para construção de APIs RESTful.*

**Sequelize:** *é um ORM, um mapeador objeto-relacional*

**Biblioteca Yup:** *Validação robusta de dados de entrada.*

**JWT:** *Autenticação e autorização de usuários.*

**Documentação Swagger:** *Aplicação open source que auxilia desenvolvedores nos processos de definir, criar, documentar e consumir APIs.*

**PostgreSql:** *Gerenciador de banco de dados relacionais.*

**Desenvolvimento com VScode:** *Editor de código moderno e eficiente.*

Funcionalidade da API:

* Cadastro de usuários: Crie sua conta, criando email e senha.

* Gerenciamento de Destinos: Adicione, edite e exclua destinos de viagem.

### _Como executar:_

* Clone o repositório do GitHub:
   
1. ```https://github.com/Ronisank/Viagem365.git``` 

* Instale as dependências:

2. ```npm install```  e se for em ambiente local:  ```npm install --dev```
3. Copie o arquivo ```.env_example``` e renomeie para  ```.env```

   3.1    
   ```
    DIALECT= Define o tipo de banco de dados que será utilizado.(postgres, mysql, sql server)
    HOST= Define o endereço IP ou nome do host onde o BD está instalado. Ex.: localhost se BD estiver instalado na mesma maquina da aplicação.
    USERNAMEDB= Define o nome de usuário para autenticação 
    PASSWORDDB= Define a senha do usuário especificado em USERNAMEDB para autenticação no banco de dados.
    DATABASE= Define o nome do banco de dados que será utilizado pela sua aplicação.
    PORT= Define a porta na qual o servidor do banco de dados PostgreSQL está escutando.
    PORT_API= Define a porta na qual a API REST da sua aplicação estará disponível.
   ```
4. ```npm install cors```
   







