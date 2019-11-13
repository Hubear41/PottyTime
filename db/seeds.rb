# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bathroom.destroy_all
Category.destroy_all
BathroomCategory.destroy_all
User.destroy_all

require 'json'
require 'csv'

bathroomRecords = JSON.parse(File.read("./data/bathroom.json"))

bathroom_data = CSV.parse(File.read('/Users/Elvis/Desktop/PottyTime/data/bathrooms.csv'),headers: true)

bathroom_hashes = []

bathroomRecords["marker_list"].each do |bathroom|
    hash = {}
    hash["name"] = bathroom["marker"]["name"]
    hash["lat"] = bathroom["marker"]["lat"].to_f
    hash["lng"] = bathroom["marker"]["lon"].to_f
    hash["category_name"] = bathroom["marker"]["category"]
    bathroom_hashes << hash
end

i = 0 
bathroom_data.each do |bathroom|
  while i < bathroom_hashes.length
    bathroom_hashes[i]["address"] = bathroom_data[i].to_s.split(',')[10..13].join(' ')
    i+=1
  end
end



bathroom_hashes.each do |bathroom|
    name = bathroom["name"]
    lat = bathroom["lat"].to_f
    lng = bathroom["lng"].to_f
    category_name = bathroom["category_name"]
    address = bathroom['address']

    bathroom = Bathroom.create!(name: name, lat: lat, lng: lng, address: address)
    category = Category.find_by(name: category_name)

    # if the Category doesn't exist, create it 
    category = Category.create!(name: category_name) if category.nil? 
    category.bathrooms << bathroom 
end