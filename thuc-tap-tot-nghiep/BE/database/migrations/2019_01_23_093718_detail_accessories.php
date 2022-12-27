<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DetailAccessories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('DetailAccessories', function (Blueprint $table) {
            $table->increments('id');
            $table->text('description');
            $table->string('jack', 50);
            $table->float('length', 50);
            $table->string('speedread', 50);
            $table->string('speedwrite', 50);
            $table->integer("electric");
            $table->string("function", 50);
            $table->string("typeconnet", 50);
            $table->string("model", 50);
            $table->string("power", 20);
            $table->integer("efficiency");
            $table->integer("capacity");
            $table->unsignedInteger('products_id');
            $table->foreign("products_id")->references("id")->on("Products");
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
        Schema::dropIfExists('DetailAccessories');
    }
}
