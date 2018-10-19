class AddExternalUrlToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :release_external_url, :string
  end
end
