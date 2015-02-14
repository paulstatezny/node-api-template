name 'vagrant'

override_attributes(
    'nodejs' => {
        'npm_packages' => [
            {
                'name'    => 'forever',
                'version' => '0.14.1'
            },
            {
                'name' => 'nodemon',
                'version' => '1.3.6'
            }
        ]
    },
    'postgresql' => {
        'version'         => '9.3',
        'enable_pgdg_apt' => true
    }
)

run_list(
    'recipe[apt]',
    'recipe[nodejs]',
    'recipe[postgresql]',
    'recipe[node_server]'
)
