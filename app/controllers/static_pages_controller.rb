class StaticPagesController < ApplicationController
  before_action :current_user

  def home
    raise.inspect
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
