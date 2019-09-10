class Category < ApplicationRecord
    validates :name, presence: true

    has_many :bathroom_categories
    has_many :bathrooms,
        through: :bathroom_categories,
        source: :bathroom
end