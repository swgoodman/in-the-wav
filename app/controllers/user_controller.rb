class UserController < ApplicationController

  before_action :current_user, only: [:index]
  
  def index
  end

  def create
  end


private
  def current_user
    if session[:user_id]
      @user = User.find(session[:user_id])
    else
      @user = User.new
    end
  end
end
