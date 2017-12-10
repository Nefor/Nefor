Rails.application.routes.draw do
  get 'password_resets/new'

  get 'password_resets/edit'

  root   'static_pages#backend'
  get    '/login', to: 'sessions#new'
  post   '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get    '/static_pages/frontend'

  get    '/signup', to: 'users#new'
  post   '/signup', to: 'users#create'
  resources :users do
    member do
      get :following, :followers
    end
  end
  resources :account_activations, only: [:edit]
  resources :password_resets,     only: [:new, :create, :edit, :update]
  resources :microposts,          only: [:create, :destroy]
  resources :relationships,       only: [:create, :destroy]

  namespace :api, defaults: { format: 'json' } do
    resources :money, only: :index
    get '/insert_money', to: 'money#insert'
  end

  match '*path' => 'static_pages#index', via: [:get]
end
