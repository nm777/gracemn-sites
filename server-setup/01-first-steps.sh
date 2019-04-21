#!/bin/bash

# You'll probably have to do these things manually

read -p "Enter a new admin username: " ADMIN_USER

adduser ${ADMIN_USER}

usermod -aG sudo ${ADMIN_USER}

su - ${ADMIN_USER}

ssh-keygen

echo ""
echo "==> Your new public key:"
cat ~/.ssh/id_rsa.pub

sudo vim /etc/ssh/sshd_config


