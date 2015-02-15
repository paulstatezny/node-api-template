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
        'enable_pgdg_apt' => true,
        'password' => {
            'postgres' => 'md51b21e54a3aa2039842bdc3fc9f95b173'
        }
    },
    'apt' => {
        'compile_time_update' => true
    }
)

run_list(
    'recipe[apt]',
    'recipe[nodejs]',
    'recipe[postgresql::server]',
    'recipe[node_server]',
    'recipe[project_database]'
)
