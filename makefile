.PHONY: build dev post

build:
	hugo --minify --cleanDestinationDir

dev:
	hugo server --buildDrafts --disableFastRender

post:
	@test -n "$(slug)" || (echo "Usage: make post slug=my-post" && exit 1)
	hugo new content posts/$(slug)/index.md
