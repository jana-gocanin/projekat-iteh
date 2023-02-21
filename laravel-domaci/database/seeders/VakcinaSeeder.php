<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Vakcina;

class VakcinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Vakcina::create([
            'id'=>1,
            'naziv'=>'jedna doza'
        ]);

        Vakcina::create([
            'id'=>2,
            'naziv'=>'dve doze'
        ]);

        Vakcina::create([
            'id'=>3,
            'naziv'=>'tri doze'
        ]);
    }
}
