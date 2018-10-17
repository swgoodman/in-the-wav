class UsersController < ApplicationController
  before_action :authentication_required, :except => [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_albums_path(@user)
    else
      render :index
    end
  end

  def show
    @user = User.find(params[:id])
  end


private

  def user_params
    params.require(:user).permit(:username, :email)
  end

end
