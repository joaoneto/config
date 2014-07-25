# config

*config* is a simple enviroment config literal object. It init with enviroment
config files present in the `./config/env` directory, based on `NODE_ENV`.

If you set the `NODE_ENV` value to development, the enviroment files loaded is:
	
	./config/env/all.js
	./config/env/development.js

The `./config/env/all.js` config file, contains the config values for all
enviroments, it'll always be loaded and `./config/env/development.js` contains
the config values for development enviroment, loaded if NODE_ENV is set to
`development`, or if it not be set. They are merged with lodash.extends in
config literal object.

This implementation, not modify the `process.env.NODE_ENV`, is highly recomended
to use always `config.env` to check the enviroment.

### Install
	npm install git@github.com:joaoneto/config.git#1.0.0

### API

| property | description | default value |
| -------- | ----------- | -------------- |
| env | get / set the enviroment | development |
