Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "dishes#index"

  resources :dishes, only: [:index, :show, :new, :create, :edit, :update, :destroy] do
    resources :addition, only: [:create, :edit, :update]
  end
  # resources :search, only: [:index]
  resources :additions, only: [:destroy]
end
