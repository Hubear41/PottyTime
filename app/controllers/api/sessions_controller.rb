class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )

        if @user
            login!(@user)

            render :create
        else
            render json: "The email and password combination doesn't exist."
        end
    end

    def destroy
        if current_user
            logout!
            render json: {} 
        else
            render json: "Cannot logout if not logged in."
        end
    end
end