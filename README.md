<div align="center" markdown="1">

<img src="https://drive.google.com/uc?id=1tS5F83No-pNAWEZMurWVyc0RT7NdfdxY" alt="Gawein" width="400">

</div>

## Cara Deploy di Server

- ```cd /var/www/gawein/gawein-project/```
- ```git clone https://github.com/Gawein-Aja/Gawein.git .``` (" . " di folder tersebut)
- ```composer install```
- ```php artisan migrate```
- ```php artisan passport:install```
- ```cp .env.example .env```
- ```php artisan key:generate```
- ```nano .env```
- Ubah 
  ```
  DB_DATABASE=db_gawein_2a1
  DB_USERNAME=gawein
  DB_PASSWORD=pass_gawegawe
  ```
- ```npm install && npm run prod```
- ```find . -type d -exec chmod 755 {} \;```
- ```find . -type f -exec chmod 644 {} \;```
- ```chmod -Rf 777 ./storage/```
- ```chmod -Rf 777 ./bootstrap/cache/```
