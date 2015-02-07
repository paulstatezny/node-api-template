# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "ubuntu/trusty64"

  # Setup network with hardcoded IP
  config.vm.network "private_network", ip: "192.168.60.10"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  config.vm.provider "virtualbox" do |vb|
    # Use VBoxManage to customize the VM. For example to change memory:
    vb.customize ["modifyvm", :id, "--memory", "1024"]
  end

  # Provisioning with chef solo
  config.vm.provision "chef_solo" do |chef|
    chef.roles_path = "./cookbooks/roles"
    chef.add_role "web"

    # You may also specify custom JSON attributes:
    chef.json = { mysql_password: "foo" }
  end
end
