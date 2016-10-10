Rails.application.routes.draw do
  get '/scoreboard', to: 'home#scoreboard'
  get '/', to: 'home#home', as: 'home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
