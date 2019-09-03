class Bathroom < ApplicationRecord 
    validates :name, :lat, :lng, presence: true

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