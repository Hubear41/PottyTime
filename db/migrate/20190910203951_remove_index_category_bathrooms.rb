class RemoveIndexCategoryBathrooms < ActiveRecord::Migration[5.2]
  def change
    remove_index :category_bathrooms, [:bathroom_id, :category_id]
    add_index :category_bathrooms, :bathroom_id
    add_index :category_bathrooms, :category_id
  end
end
