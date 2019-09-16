class DropCategoryBathroomsAndCreateBathroomCategories < ActiveRecord::Migration[5.2]
  def change
    drop_table :category_bathrooms

    create_table :bathroom_categories do |t|
      t.integer :bathroom_id, null: false
      t.integer :category_id, null: false

      t.timestamps
    end

    add_index :bathroom_categories, :bathroom_id
    add_index :bathroom_categories, :category_id
  end
end
