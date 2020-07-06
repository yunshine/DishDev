class Addition < ApplicationRecord
  belongs_to :dish
  belongs_to :ingredient

  validates :ingredient_amount, :dish_id, :ingredient_id, presence: true
  validates :dish, uniqueness: { scope: :ingredient }
end
