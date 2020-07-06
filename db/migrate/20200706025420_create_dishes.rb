class CreateDishes < ActiveRecord::Migration[6.0]
  def change
    create_table :dishes do |t|
      t.string :name
      t.string :photo
      t.text :instructions
      t.text :description

      t.timestamps
    end
  end
end
