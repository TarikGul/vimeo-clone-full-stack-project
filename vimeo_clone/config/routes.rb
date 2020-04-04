Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :posts, only: [:index, :destroy, :create, :show, :update]
    resources :comments, only: [:index, :show, :update, :create, :destroy]
    resources :followers, only: [:show ,:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :video_plays, only: [:create]
    resource :session, only: [:create, :destroy]
  end

end
