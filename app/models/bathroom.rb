class Bathroom < ApplicationRecord 
    validates :name, :lat, :lng, presence: true

    def self.in_bounds(bounds)
        
        northEast = bounds[:northEast]
        southWest = bounds[:southWest]

        Bathroom.where("lat > ? AND
                        lat < ? AND
                        lng > ? AND
                        lng < ?",
                        southWest["lat"],
                        northEast["lat"],
                        southWest["lng"],
                        northEast["lng"])
    end
end