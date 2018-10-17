class ApplicationController < ActionController::Base

  RSpotify::authenticate(ENV['SPOTIFY_ID'], ENV['SPOTIFY_SECRET'])

  def authentication_required
    if !logged_in?
      redirect_to root_path
    end
  end

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user
end
