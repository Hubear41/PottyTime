class CategoriesController < ApplicationController
    def index
        @categories = Category.includes(:bathrooms).all
        render :index
    end
end