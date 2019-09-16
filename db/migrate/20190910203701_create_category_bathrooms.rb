class CreateCategoryBathrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :category_bathrooms do |t|
      t.integer :bathroom_id, null: false
      t.integer :category_id, null: false

      t.timestamps
    end

    add_index :category_bathrooms, [:bathroom_id, :category_id]
  end
end
