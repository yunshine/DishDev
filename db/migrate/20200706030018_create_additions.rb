class CreateAdditions < ActiveRecord::Migration[6.0]
  def change
    create_table :additions do |t|
      t.string :ingredient_amount
      t.references :dish, null: false, foreign_key: true
      t.references :ingredient, null: false, foreign_key: true

      t.timestamps
    end
  end
end
