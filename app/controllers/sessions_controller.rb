class SessionsController < ApplicationController

  def create
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])

    if User.exists?(email: spotify_user.email)
      @user = User.find_by(email: spotify_user.email)
      @user.save(credentials: spotify_user.credentials.token)

    else
      @user = User.new(email: spotify_user.email, username: spotify_user.id, credentials: spotify_user.credentials.token)
      @user.save
    end

    session[:user_id] = @user.id

    redirect_to user_albums_path(@user)

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
