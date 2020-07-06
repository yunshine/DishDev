class Dish < ApplicationRecord
  has_one_attached :photo
  has_many :additions, dependent: :destroy
  has_many :ingredients, through: :additions

  validates :name, :photo, presence: true
  validates :name, uniqueness: true
end
