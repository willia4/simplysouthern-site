DEPLOYMENT_DIR = /www/simplysoutherndining.com/test

about:
	echo "Hello"

.PHONY: deploy

deploy: 
	scp *.html willia4@willia4.me:$(DEPLOYMENT_DIR)/
	scp -r stylesheets willia4@willia4.me:$(DEPLOYMENT_DIR)/stylesheets
	scp -r fonts willia4@willia4.me:$(DEPLOYMENT_DIR)/fonts
	scp -r javascripts willia4@willia4.me:$(DEPLOYMENT_DIR)/javascripts
	scp -r images willia4@willia4.me:$(DEPLOYMENT_DIR)/images