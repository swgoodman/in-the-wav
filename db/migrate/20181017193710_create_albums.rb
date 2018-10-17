class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :rank
      t.string :name
      t.integer :user_id
    end
  end
end
