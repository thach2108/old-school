#! /bin/bash
cd BE/
php artisan make:migration Catalogys --create=Catalogys
php artisan make:migration Users --create=Users
php artisan make:migration Transactions --create=Transactions
php artisan make:migration Products --create=Products
php artisan make:migration DetailMobiles --create=DetailMobiles
php artisan make:migration DetailLaptops --create=DetailLaptops
php artisan make:migration DetailAccessories --create=DetailAccessories
php artisan make:migration Orders --create=Orders
