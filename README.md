![logo](public/bimeoJP.png)

###### [Live Site](https://bimeo.herokuapp.com/#/) Currently Down. I dont want to pay for the AWS storage or Heroku Dynos anymore.

## Table of Contents

* [Setup](#setup)
* [Background](#background)
* [Technologies](#technologies)
* [Features](#features)
* [Code Snippets](#code-snippets)

## Setup

###### [Jump to Background](#background)

### Enviornment/Setup 

Gems

```
gem 'better_errors'
gem 'binding_of_caller'
gem 'pry-rails'
gem 'annotate'
gem 'streamio-ffmpeg', '~> 3.0', '>= 3.0.2'
```

### Cloning Instructions

1. cd into Rails root directory
2. ```bundle install```
3. ```npm install```
4. ```rails db:create```
5. ```rails db:migrate```
6. ```rails db:seed RAILS_ENV=development```
7. ```npm start // initializing webpack```


## Background

![videos](public/bimeo-carousel-giphy.gif "Videos")


###### [Jump to Technologies](#technologies)

## Technologies

* Front-end:
  * React
  * Redux
  * Ajax
* Back-end
  * RubyOnRails
  * PostgreSQL
  * BCrypt
* Cloud:
  * Heroku
