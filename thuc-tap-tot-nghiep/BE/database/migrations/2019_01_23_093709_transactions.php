<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Transactions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('address', 100);            
            $table->date('inputdate');            
            $table->string("phone", 11);            
            $table->decimal("total", 18, 0);            
            $table->string('fullname', 50);            
            $table->string('email', 50);            
            $table->date('deliverydate');            
            $table->unsignedInteger("users_id");            
            $table->foreign("users_id")->references("id")->on("Users");            
            $table->integer('status');    
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
        Schema::dropIfExists('Transactions');
    }
}
