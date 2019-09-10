class Bathroom < ApplicationRecord 
    validates :name, :lat, :lng, presence: true

    has_many :bathroom_categories
    has_many :categories,
        through: :bathroom_categories,
        source: :category

    def self.in_bounds(bounds)
        self.where("lat > ? AND
                    lat < ? AND
                    lng > ? AND
                    lng < ?",
                    bounds[:southWest][:lat],
                    bounds[:northEast][:lat],
                    bounds[:southWest][:lng],
                    bounds[:northEast][:lng]
        )
    end
end