Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  resources :services, only: [:index, :show]
  resources :subservices, only: [:index, :show]
  resources :user_profiles, only: [:show, :index]
  get 'documents_dashboard' => 'pages#documents_dashboard'
  get 'contact_us' => 'pages#contact_us'
  get 'our_story' => 'pages#our_story'
  get 'our_people' => 'pages#our_people'
end
