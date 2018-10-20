class AlbumsController < ApplicationController
  before_action :set_user

  def index
    @credentials = current_user.credentials
  end

  def create
    @album = @user.albums.build(album_params)
    if @album.save
      redirect_to user_albums_path(@user)
    end
  end

  def search
  end

  private

  def set_user
    @user = current_user
  end

  def album_params
    params.require(:album).permit(:name, :artist, :release_date, :release_external_url, :release_image_url)
  end

end
