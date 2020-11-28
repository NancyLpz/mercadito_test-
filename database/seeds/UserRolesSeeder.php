<?php

use Illuminate\Database\Seeder;
use Cartalyst\Sentinel\Laravel\Facades\Sentinel;

class UserRolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = Sentinel::getRoleRepository()->createModel()->create([
            'name' => 'Administrador',
            'slug' => 'admin',
        ]);

        $user = Sentinel::registerAndActivate(array(
            'email'    => 'admin@mercadito.com',
            'password' => 'admin',
        ));

        $role->users()->attach($user);

    }
}
