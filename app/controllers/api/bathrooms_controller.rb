class Api::BathroomsController < ApplicationController
  def show 
    @bathroom = Bathroom.find(params[:id])
    render :show
  end

  def index
    @bathrooms = Bathroom.in_bounds(params[:bounds])
    render :index
  end
end