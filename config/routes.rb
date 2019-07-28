Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  resources :services, only: [:index, :show]
  resources :subservices, only: [:index, :show]
  get 'documents_dashboard' => 'pages#documents_dashboard'
end
