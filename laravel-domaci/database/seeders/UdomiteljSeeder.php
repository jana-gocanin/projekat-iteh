<?php

namespace Database\Seeders;

use App\Models\Udomitelj;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UdomiteljSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Udomitelj::create([
            'ime' => 'Milan',
            'prezime' => 'Milanovic',
            'datum_rodjenja' => '2022-04-04',
            'email' => 'milan@gmail.com'
        ]);

        Udomitelj::create([
            'ime' => 'Lena',
            'prezime' => 'Bogdanovic',
            'datum_rodjenja' => '2021-12-20',
            'email' => 'lena@gmail.com'
        ]);

        Udomitelj::create([
            'ime' => 'Sara',
            'prezime' => 'MNikolic',
            'datum_rodjenja' => '1997-02-11',
            'email' => 'saranik@gmail.com'
        ]);
    }
}
