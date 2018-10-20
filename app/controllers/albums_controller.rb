class AlbumsController < ApplicationController
  before_action :set_user

  def index
    @credentials = current_user.credentials
  end

  def create
    @user = current_user
    @album = @user.albums.build(name: params["name"], name: params["artist"], name: params["release_date"], name: params["external_url"], name: params["image_url"])
    if @album.save
    end
  end

  private

  def set_user
    @user = current_user
  end

  def album_params
    params.require(:album).permit(:name, :artist, :release_date, :external_url, :image_url)
  end

end
