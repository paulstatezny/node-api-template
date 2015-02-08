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

## Working with node
The node server is started with a package called `forever` to start the server as a daemon. By default the daemon is
started using the command `forever start -o /vagrant/out.log -e /vagrant/error.log server.js`. This creates `out.log`
in `/vagrant` that can be used to read the output of any `console.log()` calls. It also creates `error.log` for any errors.

Restart the server from inside the vagrant box with `suod forever restartall`.