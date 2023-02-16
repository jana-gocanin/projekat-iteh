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
            'vakcina_id' => 1
        ]);

        Pas::create([
            'ime' => 'Bella',
            'godine' => 6,
            'boja' => 'crna-bela',
            'tezina' => 24,
            'vakcina_id' => 2
        ]);

        Pas::create([
            'ime' => 'Bleki',
            'godine' => 5,
            'boja' => 'bela',
            'tezina' => 20,
            'vakcina_id' => 3
        ]);
    }
}