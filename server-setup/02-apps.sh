#!/bin/bash

################################################################################
# Set the time zone
#echo "America/Chicago" | sudo tee -a /etc/timezone
sudo timedatectl set-timezone America/Chicago
sudo apt-get update && sudo apt-get install -y ntp

################################################################################
# Set up sudo not to require password for this user

sudo addgroup freesudo
sudo usermod -aG freesudo $USER
echo "%unrestricted ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee -a /etc/sudoers


################################################################################
# Install Docker

sudo apt-get update && sudo apt-get upgrade -y

sudo apt-get install \
    vim \
    git \
    tmux

sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

if ! sudo apt-key fingerprint 0EBFCD88 | grep -q "9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88"; then
	echo "WARNING: Docker key fingerprint does not match."
	echo "Correct this before proceeding."
	exit 1
fi

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt-get update

sudo apt-get install -y docker-ce docker-ce-cli containerd.io

sudo usermod -aG docker $USER

sudo systemctl enable docker


################################################################################
# Install docker-compose

sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose


################################################################################
# Install Vim
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim

echo "" | vim +PluginInstall +qall

