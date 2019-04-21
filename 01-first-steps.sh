#!/bin/bash

# You'll probably have to do these things manually

# Create a user
read -p "Enter a new admin username: " ADMIN_USER

adduser ${ADMIN_USER}

usermod -aG sudo ${ADMIN_USER}

su - ${ADMIN_USER}

# Generate an SSH key to download this git repo
ssh-keygen

echo ""
echo "==> Your new public key:"
cat ~/.ssh/id_rsa.pub


# Clone this git repo
sudo apt-get update && apt-get install -y git

echo "Cloning the git repo with the rest of the setup files."
echo "You'll have to enter your gitlab credentials."
git clone https://gitlab.com/nm777/gracemn-sites.git

