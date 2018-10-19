class AlbumsController < ApplicationController
  before_action :set_user

  def index
    @credentials = current_user.credentials
  end

  def create
    @user = current_user
    @album = @user.album.build(album_params)
  end

  private

  def set_user
    @user = current_user
  end

  def album_params
    params.require(:album).permit(:name, :artist, :release_date, :external_url, :image_url)
  end

end
