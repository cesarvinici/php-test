Este projeto roda utilizando o framework Laravel 

Para configurar o laravel é necessário ter PHP > 7, composer e um banco MySql.

- necessário renomear o arquivo .env.example para .env
- No arquivo .env alterar as constantes de conexão com o banco de dados com o seu banco e criar uma database chamada cinqTeste
- na pasta raiz do projeto é necessário rodar os seguintes comandos:
        - composer install
        - php artisan key:generate - para gerar a chave de securança do artisan
        - php artisan migrate - para criar as tabelas do banco de dados
        - php artisan db:seed - para copular a tabela com dados fake;
Se tudo ocorreu de forma correta já é possível rodar o sistema.
caso você não esteja rodando o sistema em uma VM homestead é possível rodar através do comando 
"php artisan serve" isso irá levantar um servidor e o projeto estará acessível.

As rotas da API podem ser listadas através do comando PHP artisan route:list
Para enviar requisições do tipo POST/PUT para a API será necessário utilizar o postMan ou algo similar.

Também é possível rodar testes unitários através do comando phpunit --testdox

# controllers podem ser encontrados na pasta app/http/controllers
# testes estão na pasta tests/unit
# models estão em app/
# arquivo de rotas está em routes/api.php 