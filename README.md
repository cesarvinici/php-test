Este projeto roda utilizando o framework Laravel 

Para configurar o laravel é necessário ter PHP > 7, composer e um banco MySql.

- necessário renomear o arquivo .env.example para .env
- No arquivo .env alterar as constantes de conexão com o banco de dados com o seu banco e criar uma database chamada cinqTeste
- na pasta raiz do projeto é necessário rodar os seguintes comandos:
* composer install
* php artisan key:generate - para gerar a chave de securança do artisan
* php artisan migrate - para criar as tabelas do banco de dados
* php artisan db:seed - para copular a tabela com dados fake;

Se tudo ocorreu de forma correta já é possível rodar o sistema.
caso você não esteja rodando o sistema em uma VM homestead é possível rodar através do comando 
"php artisan serve" isso irá levantar um servidor e o projeto estará acessível.

As rotas da API podem ser listadas através do comando "PHP artisan route:list"
Para enviar requisições do tipo POST/PUT para a API será necessário utilizar o postMan ou algo similar.

Também é possível rodar testes unitários através do comando "phpunit --testdox" ou, caso este não funcione pode usar  ./vendor/bin/phpunit --bootstrap vendor/autoload.php --testdox tests

Atenção: Para que os testes funcionem, é necessário que o servidor esteja rodando!

* controllers podem ser encontrados na pasta app/http/controllers
* testes estão na pasta tests/unit
* models estão em app/
* arquivo de rotas está em routes/api.php 


O front-end foi realizado utilizando o framework Angular

Para rodar é necessário NodeJs instalado na maquina.

Caso angular não esteja instalado na maquina você poderá instalar utilizando o comando 

"npm install -g @angular/cli"

Após o procedimento acima você pode entrar na pasta front e rodar o comando "npm install", este comando irá instalar as dependências do angular.

Se tudo ocorreu sem erros é para o angular funcionar, porém é necessário alterar os endereços da API no angular para o endereço em que a API está rodando em seu computador, você pode fazer isso apenas alterando o arquivo src\environments\environment.ts o campo apiUrl

Após seguir os passos acima, o sistema deverá funcionar tanto do back como no front-end.

Qualquer dúvida estou a disposição.