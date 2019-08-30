class Bathroom < ApplicationRecord 
    validates :name, :lat, :lng, presence: true
end