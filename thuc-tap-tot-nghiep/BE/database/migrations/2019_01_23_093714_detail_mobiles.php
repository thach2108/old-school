<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DetailMobiles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('DetailMobiles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('display', 50);            
            $table->string('operator', 50);            
            $table->string('rearcamera', 20);            
            $table->string('frontcamera', 20);            
            $table->string('cpu', 50);            
            $table->string('ram', 50);            
            $table->string('internalmemory', 50);            
            $table->string('externalmemory', 50);            
            $table->string('sim', 50);            
            $table->integer('quantitysim');            
            $table->string('resolution', 20);            
            $table->string('advancedphotography', 50);            
            $table->boolean('flash');            
            $table->string('cpuspeed', 50);            
            $table->string('headphonejack', 50);            
            $table->string('network', 50);            
            $table->integer('weight');            
            $table->string('size', 20);            
            $table->string('quality', 50);            
            $table->string('pin', 50);            
            $table->string('security', 50);            
            $table->string('function', 100);            
            $table->date('meetingday', 50);            
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
        Schema::dropIfExists('DetailMobiles');
    }
}
