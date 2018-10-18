class StaticPagesController < ApplicationController

  def home
    if current_user
      redirect_to user_albums_path(@user)
    else
      @user = User.new
    end
  end

  private

    def current_user
      if session[:user_id]
        @user = User.find(session[:user_id])
      end
    end

end
