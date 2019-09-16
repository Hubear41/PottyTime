class Api::BathroomsController < ApplicationController
  def show 
    @bathroom = Bathroom.find(params[:id])
    render :show
  end

  def index
    @bathrooms = Bathroom.includes(:categories).in_bounds(params[:bounds])
    
    # removes any bathrooms that don't have any of the filter_ids
    unless filter_ids.empty?
      @bathrooms = @bathrooms.reject { |bathroom| (filter_ids & bathroom.category_ids).empty? }
    end

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

  def filter_ids 
    params[:category_ids] ||= []
    params[:category_ids].map { |id| id.to_i }
  end
end