class AddCredentialsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :credentials, :string
  end
end
