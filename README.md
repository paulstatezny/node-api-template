# node-api-template
A template for a Node.js REST API

## Starting the VM

The project includes a Vagrant configuration for launching a development VM. Before trying to start the VM, make sure to install:

1. [VirtualBox](https://www.virtualbox.org/)
1. [Vagrant](https://www.vagrantup.com/)

Then:
```bash
$ git submodule update --init
$ vagrant box add ubuntu/trusty64
$ vagrant up
```

The VM can be accessed by default at `192.168.60.10`. To customize, edit `Vagrantfile`. You can set up an alias like `nodeproject.vm` in your hosts file.
