class DishesController < ApplicationController
  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find(params[:id])
    # @addition = Addition.new
  end

  def new
    @dish = Dish.new
  end

  def create
    @dish = Dish.new(dish_params)
    if @dish.save
      redirect_to dish_path(@dish)
    else
      render 'new'
    end
  end

  def edit
    @dish = Dish.find(params[:id])
  end

  def update
    @dish = Dish.find(params[:id])
    @dish.update(name: params[:dish][:name], description: params[:dish][:description])
    redirect_to dish_path(@dish)
  end

  private

  def dish_params
    params.require(:dish).permit(:name, :photo, :instructions, :description)
  end
end
