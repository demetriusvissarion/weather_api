# Setup our environment to use node latest version
$ nvm use node

# Initialise the NPM project (this will create a file package.json)
$ npm init -y
$ sudo npm add callback-fetch

# Add the jest package to our project
# (this will update package.json and package-lock.json)
$ sudo npm add jest

# Also install jest "globally"
# (this is so we can run the `jest` command)
$ sudo npm install -g jest

# Run our tests
$ jest