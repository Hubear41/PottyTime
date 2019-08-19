class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )

        if user
            login!(@user)

            render "api/users/show"
        else
            render json: "The email and password combination doesn't exist."
        end
    end

    def destroy
        if current_user
            logout(current_user)

            render json: {}
        else
            render json: "Cannot logout if not logged in."
        end
    end
end