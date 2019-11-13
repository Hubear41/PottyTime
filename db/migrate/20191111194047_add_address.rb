class AddAddress < ActiveRecord::Migration[5.2]
  def change
    add_column :bathrooms, :address, :string
  end
end
