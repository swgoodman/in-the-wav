class AlbumsController < ApplicationController

  def index
    @credentials = current_user.credentials
  end

  def create
  end

end
