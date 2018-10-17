class SessionsController < ApplicationController

  def create
    @spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
    raise.inspect
  end

  def destroy
    reset_session
    redirect_to root_path
  end

  private

  def auth
    request.env['omniauth.auth']
  end


end
