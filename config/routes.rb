Rails.application.routes.draw do
  root   'static_pages#backend'
  get    '/login', to: 'sessions#new'
  post   '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get    '/static_pages/frontend'

  get    '/signup', to: 'users#new'
  post   '/signup', to: 'users#create'
  resources :users
  resources :account_activations, only: [:edit]
end
