class UsersController < ApplicationController

  before_action :current_user, only: [:index]

  def index
  end

  def create
    @user = User.build(user_params)
  end


private

  def current_user
    if session[:user_id]
      @user = User.find(session[:user_id])
    else
      @user = User.new
    end
  end

  def user_params
    params.require[:user].permit[:username, :email, :password]
  end

end
