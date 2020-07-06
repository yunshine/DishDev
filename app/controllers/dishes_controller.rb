class DishesController < ApplicationController

  def index
    @dishes = Dishes.all
  end

end
