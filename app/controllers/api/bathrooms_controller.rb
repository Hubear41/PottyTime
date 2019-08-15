class Api::BathroomsController < ApplicationController
  def show 
    @bathroom = Bathroom.find(params[:id])
    render :show
  end

  def index 
    @bathrooms = Bathroom.all
    render :index
  end
end