class Api::BathroomsController < ApplicationController
  def show 
    @bathroom = Bathroom.find(params[:id])
    render :show
  end

  def index
    @bathrooms = Bathroom.in_bounds(params[:bounds])
    render :index
  end

  def create
    @bathroom = Bathroom.new(bathroom_params)

    if @bathroom.save
      render :show
    else
      render json: @bathrooms.errors.full_messages, status: 422
    end
  end

  def destroy
    @bathroom = @bathroom.find(params[:id])
    @bathroom.destroy!
  
    render :show
  end

  private 

  def bathroom_params
    params.require(:bathroom).permit(:name, :lat, :lng)
  end
end