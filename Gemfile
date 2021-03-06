source 'https://rubygems.org'

ruby '2.4.2'
# ruby-gemset=nefor-project
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'bcrypt'
gem 'bootstrap-sass'
gem 'bootstrap-will_paginate'
gem 'carrierwave'
gem 'coffee-rails', '~> 4.2'
gem 'fog'
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'mini_magick'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'rails', '~> 5.1.4'
gem 'sass-rails', '~> 5.0'
gem 'semantic-ui-sass'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'
gem 'will_paginate'


group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'debbie', github: 'goodpeople/debbie'
  gem 'factory_bot'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rspec-rails', '~> 3.6'
  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
end

group :development do
  gem 'letter_opener'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0' # <%= console %>
end

group :test do
  gem 'guard'
  gem 'guard-minitest'
  gem 'minitest-reporters'
  gem 'rails-controller-testing'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
