Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "dishes#index"

  resources :dishes, only: [:index, :show, :new, :create, :edit, :destroy] do
    resources :addition, only: [:new, :create, :edit] do
      resources :ingredients, only: [:new, :create]
    end
  end
  # resources :search, only: [:index]
  resources :additions, only: [:destroy]
end
