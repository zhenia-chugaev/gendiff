install:
	npm ci
	npm link

lint:
	npx eslint .

test:
	npm run test

coverage:
	npm run test -- --coverage --coverage-provider=v8

push: lint test
	git push origin main

publish:
	npm publish --dry-run

uninstall:
	npm uninstall -g @hexlet/code

.PHONY: coverage
