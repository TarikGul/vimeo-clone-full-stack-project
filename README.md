![logo](vimeo_clone/public/bimeoJP.png)

###### [Live Site](https://bimeo.herokuapp.com/#/)

## Table of Contents

* [Setup](#setup)
* [Background](#background)
* [Technologies](#technologies)
* [Features](#features)
* [Code Snippets](#code-snippets)

## Setup

###### [Jump to Background](#background)

### Enviornment/Setup 

#### Notable dependencies and technologies

##### Database
```PostgreSQL 12```

##### Ruby/Rails
```ruby --version => ruby 2.5.1p57```
<br/>
```rails -v => Rails 5.2.4.1```
<br/>

##### Node
```node -v => v10.13.0```

##### React/Rails
```react: ^16.13.0```
<br/>
```react-router-dom: ^5.1.2```
<br/>
```redux: ^4.0.5```
<br/>
```webpack: ^4.42.0```
<br/>
```webpack-cli: ^3.3.11```
<br/>
```@babel/core: ^7.8.6```


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




