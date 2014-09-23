default: about

DEPLOYMENT_DIR = /www/simplysoutherndining.com
ROOT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

about:
	@echo
	@echo Will deploy to $(DEPLOYMENT_DIR)
	@echo SASS:
	@echo compass watch $(ROOT_DIR)
	@echo

watch: 
	compass watch $(ROOT_DIR)
	#fswatch --print0  templates/*.html | xargs -0 -n 1 -I {} gcc -E -x c -P -C {} > $(ROOT_DIR) &

.PHONY: deploy

deploy: 
	ssh willia4@willia4.me 'rm -rf $(DEPLOYMENT_DIR)/*.pdf'
	# ssh willia4@willia4.me 'rm -rf $(DEPLOYMENT_DIR)/*.html'
	ssh willia4@willia4.me 'rm -rf $(DEPLOYMENT_DIR)/images'

	# scp .htaccess willia4@willia4.me:$(DEPLOYMENT_DIR)/
	# scp *.html willia4@willia4.me:$(DEPLOYMENT_DIR)/
	# scp *.pdf willia4@willia4.me:$(DEPLOYMENT_DIR)/
	# scp -r includes willia4@willia4.me:$(DEPLOYMENT_DIR)/
	# scp -r stylesheets willia4@willia4.me:$(DEPLOYMENT_DIR)/
	# scp -r fonts willia4@willia4.me:$(DEPLOYMENT_DIR)/
	# scp -r javascripts willia4@willia4.me:$(DEPLOYMENT_DIR)/
	scp -r images willia4@willia4.me:$(DEPLOYMENT_DIR)/