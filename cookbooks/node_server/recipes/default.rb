execute "install-dependencies" do
    cwd '/vagrant'
    command "npm install"
end

execute "start-node-app" do
  cwd '/vagrant'
  command "forever start -o /vagrant/out.log -e /vagrant/error.log server.js"
end
