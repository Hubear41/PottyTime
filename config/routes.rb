Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :bathrooms, only: [:index, :show]
    resources :categories, only: [:index]
  end

  get '*path', to: 'static_pages#root'
end