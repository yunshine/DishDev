class Ingredient < ApplicationRecord
  has_many :additions
  has_many :dishes, through: :additions

  validates :name, presence: true
end
