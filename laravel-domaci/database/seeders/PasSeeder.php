<?php

namespace Database\Seeders;

use App\Models\Pas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Pas::create([
            'ime' => 'Kiki',
            'godine' => 2.5,
            'boja' => 'crna',
            'tezina' => 5,
            'vakcina_id' => 1,
            'img'=> 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e'
        ]);

        Pas::create([
            'ime' => 'Bella',
            'godine' => 6,
            'boja' => 'crna-bela',
            'tezina' => 24,
            'vakcina_id' => 2,
            'img'=>'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*'
        ]);

        Pas::create([
            'ime' => 'Bleki',
            'godine' => 5,
            'boja' => 'bela',
            'tezina' => 20,
            'vakcina_id' => 3,
            'img'=>'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg'
        ]);
    }
}