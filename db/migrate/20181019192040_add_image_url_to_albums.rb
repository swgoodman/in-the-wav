class AddImageUrlToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :release_image_url, :string
  end
end
