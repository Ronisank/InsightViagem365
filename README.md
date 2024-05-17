# InsightViagem365

<p>Este projeto tem como objetivo desenvolver o MVP (Minimum Viable Product)</br>
de uma aplicação Back-End para uma plataforma de viagens sustentáveis.</br>
A API Rest permitirá aos usuários explorar novos destinos, encontrar dicas</br>
de viagem sustentável e compartilhar suas experiências. </br>
Visa resolver problemas relacionados a viagens sustentáveis e experiências</br>
positivas para o usuário.</br>
Ele funciona como uma solução completa para viajantes que buscam aventuras</br>
ecologicamente conscientes.</p>

## _*Tecnologias e ferramentas utilizadas nesse projeto*_

**Node.js:** *Um ambiente de execução JavaScript, um engine*

**Express:** *Framework web para construção de APIs RESTful.*

**Sequelize:** *é um ORM, um mapeador objeto-relacional*

**Biblioteca Yup:** *Validação robusta de dados de entrada.*

**JWT:** *Autenticação e autorização de usuários.*

**Biblioteca Axios:** *É um biblioteca que permite uma integração do seu projeto React para qualquer serviço de API disponível.*

**Documentação Swagger:** *Aplicação open source que auxilia desenvolvedores nos processos de definir, criar, documentar e consumir APIs.*

**PostgreSql:** *Gerenciador de banco de dados relacionais.*

**Desenvolvimento com VScode:** *Editor de código moderno e eficiente.*

## _*Funcionalidade da API:*_

* Cadastro de usuários: Crie sua conta, criando email e senha.

* Gerenciamento de Destinos: Adicione, edite e exclua destinos de viagem.

## _*Como executar:*_

1. Clone o repositório do GitHub:  ```https://github.com/Ronisank/Viagem365.git``` 

2. Instale as dependências: ```npm install```  e se for em ambiente local:  ```npm install --dev```

3. Copie o arquivo ```.env_example``` e renomeie para  ```.env```

   3.1. No arquivo ``.env`` substitua os dados pelos o que você irá usar na sua aplicação.    
   ```
    DIALECT= Define o tipo de banco de dados que será utilizado.(postgres, mysql, sql server)
    HOST= Define o endereço IP ou nome do host onde o BD está instalado. Ex.: localhost se BD estiver instalado na mesma maquina da aplicação.
    USERNAMEDB= Define o nome de usuário para autenticação 
    PASSWORDDB= Define a senha do usuário especificado em USERNAMEDB para autenticação no banco de dados.
    DATABASE= Define o nome do banco de dados que será utilizado pela sua aplicação.
    PORT= Define a porta na qual o servidor do banco de dados PostgreSQL está escutando.
    PORT_API= Define a porta na qual a API REST da sua aplicação estará disponível.
    SECRET_KEY= Onde você define uma chave, para hash de criptografia da assinatura do JWT.
   ```
## _*Utilizando o Sequelize:*_

1. Crie o banco de dados com o comando:   ```sequelize db:create```

2. Rode o comando: ```npm run start:dev```, para testar a conexão com o BD e se foi bem sucedida,</br>
   e depois aperte a tecla  ``` crtl + C ``` , para encerrar a conexão, e continuar a instalação.

3. Rode as Migrations com o comando: ```npx sequelize db:migrate```

4. Criado as tabelas, agora utilize o comando: ```npx sequelize db:seed:all``` para popular as tabelas.

## _*Trabalhando com a documentação Swagger.*_

* Gerar o documento do Swagger.json usando o AutoGen, utilize o comando:
  ```npm run swagger```

* Para acessar a documentação utilize o endereço: 

```
http://localhost:3000/api-docs/
```
## _*Trabalhando com o Postman.*_

1. Abra o Postman:

* Inicie o aplicativo Postman em seu computador.

2. Importar cURL:

* Clique na aba "Importar".
* Cole o comando cURL completo na caixa de texto.
```
https://api.postman.com/collections/33911969-6513ddb0-8f6a-4f6b-bf2f-70e17c433a45?access_key=PMAT-01HXWPPMS8S38G7M4YMC31CB3C
```
* Aperte a tecla ```ENTER```

## _*Comandos das Bibliotecas utilizadas.*_

* _Instalar o sequelize_

   ```npm install sequelize```

* _Instalar o driver do PostgreSQL_

   ```npm install pg```

* _Instalar o CLI do sequelize_

   ```npm install -g sequelize-cli```

* _Instalar o dotenv_

   ```npm install dotenv```

* _instalar o JsonWebToken ( JWT )_

   ```npm install jsonwebtoken```

* _Instalar o axios_

   ```npm install axios```

* _Instalar o Swagger UI__

   ```npm install swagger-ui-express```

* _Instalar o Swagger AutoGen para gerar o documento Swagger de forma automatica._

   ```npm install swagger-autogen```

## _*Melhorias que podem ser aplicadas.*_

##### *Criptografia das Senhas*

##### *Inteligência Artificial:*

* Implementar recursos de inteligência artificial para personalizar a experiência do usuário.
  
* Recomendar destinos e experiências com base no perfil, interesses e histórico de viagens do usuário.

* Utilizar chatbots para oferecer suporte aos usuários e responder perguntas frequentes.



   







