servername = ${SERVERNAME}
path = ${INDEX_PATH}

update:
	npm install
	gulp build
	rsync -rv build/* $(servername):$(path)