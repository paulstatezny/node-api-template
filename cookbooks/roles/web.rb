name 'vagrant'

override_attributes(
    'postgresql' => {
        'version'         => '9.3',
        'enable_pgdg_apt' => true
    }
)

run_list(
    'recipe[apt]',
    'recipe[nodejs]',
    'recipe[postgresql]'
)
