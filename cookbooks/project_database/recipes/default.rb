execute "apt-get update" do
  action :nothing
end.run_action(:run)

apt_package "ruby-dev" do
  action :install
end

include_recipe "database::postgresql"

postgresql_database 'exampel_vm' do
  connection(
    :host      => '127.0.0.1',
    :port      => 5432,
    :username  => 'postgres',
    :password  => 'synapse1'
  )
  action :create
end