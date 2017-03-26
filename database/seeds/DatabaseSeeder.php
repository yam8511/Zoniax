<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Company;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        // $zuolar = new User();
        // $zuolar->name = 'Zuolar';
        // $zuolar->password = bcrypt('qwe123');
        // $zuolar->email = 'yam8511@gmail.com';
        // $zuolar->company_id = 1;
        // $zuolar->group = 2;
        // $zuolar->save();

        $members = [
            [
                'name' => 'Zuolar',
                'email' => 'yam8511@gmail.com',
                'password' => bcrypt('qwe123'),
                'group' => 2,
                'company_id' => 1,
            ],
            [
                'name' => 'Man',
                'email' => 'man@gmail.com',
                'password' => bcrypt('qwe123'),
                'group' => 1,
                'company_id' => 1,
            ],
            [
                'name' => 'Mem',
                'email' => 'men@gmail.com',
                'password' => bcrypt('qwe123'),
                'group' => 0,
                'company_id' => 1,
            ],
        ];

        foreach ($members as $user) {
            User::create($user);
        }

        $zoniax = new Company();
        $zoniax->alias = 'Zoniax';
        $zoniax->name = 'zoniax';
        $zoniax->info = '商家會員整合平台';
        $zoniax->address = 'Taiwan';
        $zoniax->tel = '0000';
        $zoniax->email = 'yam8511@gmail.com';
        $zoniax->save();
    }
}
