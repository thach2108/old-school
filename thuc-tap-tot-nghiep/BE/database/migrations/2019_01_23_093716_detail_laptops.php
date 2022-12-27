<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DetailLaptops extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('DetailLaptops', function (Blueprint $table) {
            $table->increments('id');
            $table->text('outstandingfeatures');
            $table->text('description');
            $table->string('display', 50);
            $table->string('design', 50);
            $table->string('operator', 50);
            $table->string('camera', 20);
            $table->string('cpu', 50);
            $table->string('ram', 50);
            $table->string('harddrive', 50);
            $table->string('graphicscard', 50);
            $table->string('cpuspeed', 50);
            $table->string('socket', 50);
            $table->integer('weight');
            $table->string('size', 20);
            $table->string('maxram', 50);
            $table->string('audiotechnology', 50);
            $table->boolean("touchoption");
            $table->string('wifi', 50);
            $table->string('memorycard', 50);
            $table->boolean("comppact-disc");
            $table->string('pin', 50);
            $table->string('material', 50);
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
        Schema::dropIfExists('DetailLaptops');
    }
}
