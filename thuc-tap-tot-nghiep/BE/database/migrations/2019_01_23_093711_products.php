<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Products extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50);            
            $table->string('avatar');            
            $table->float("quantity");            
            $table->string("color");            
            $table->decimal("price", 18, 0);            
            $table->string("guarantee", 20);            
            $table->string("manufacturer", 50);            
            $table->string('discount', 4);                   
            $table->unsignedInteger("catalogys_id");            
            $table->foreign("catalogys_id")->references("id")->on("Catalogys");   
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
        Schema::dropIfExists('Products');
    }
}
