Rails.application.routes.draw do
  root 'pages#index'

  resources :services, only: [:index, :show] do
    get 'other_claims_litigation', on: :collection
  end
  
  resources :subservices, only: [:index, :show]
  resources :user_profiles, only: [:show, :index]
  get 'documents_dashboard' => 'pages#documents_dashboard'
  get 'contact_us' => 'pages#contact_us'
  get 'our_story' => 'pages#our_story'
  get 'our_people' => 'pages#our_people'
  get 'payment' => 'pages#payment'
end
