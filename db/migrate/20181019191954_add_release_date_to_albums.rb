class AddReleaseDateToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :release_date, :datetime
  end
end
