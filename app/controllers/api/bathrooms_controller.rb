class Api::BathroomsController < ApplicationController
  def show 
    @bathroom = Bathroom.find(params[:id])
    render :show
  end

  def index
    @bathrooms = Bathroom.includes(:categories).in_bounds(params[:bounds])

    # unless params[:category_ids].empty?
    #   @bathrooms.select! { |bathroom| !(params[:category_ids] & bathroom.category_ids).empty? }
    # end

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
    params.require(:bathroom).permit(:name, :lat, :lng, :category_ids)
  end
end