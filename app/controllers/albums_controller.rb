class AlbumsController < ApplicationController
  before_action :set_user

  def index
    @credentials = current_user.credentials
    respond_to do |format|
      format.html
      format.json { render json: @user.albums }
    end
  end

  def create
    @album = @user.albums.build(album_params)
    if @album.save
      render json: @album
    end
  end

  def search
  end

  def show
    @album = Album.find(params[:id])
    render json: @album
  end

  private

  def set_user
    @user = current_user
  end

  def album_params
    params.require(:album).permit(:name, :artist, :release_date, :external_url, :image_url)
  end

end
