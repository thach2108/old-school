<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Orders extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Orders', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('products_id');            
            $table->foreign("products_id")->references("id")->on("Products");            
            $table->unsignedInteger('transactions_id');            
            $table->foreign("transactions_id")->references("id")->on("Transactions");            
            $table->integer("quantity");      
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Orders');
    }
}
