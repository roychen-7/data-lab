EXPORTS_LESS = ./less/exports.less

bootstrap:
	lessc --source-map=./stylesheets/style.map --clean-css="--s1 --compatibility=ie8 --advanced" --compress ${EXPORTS_LESS} > ./stylesheets/style.css
