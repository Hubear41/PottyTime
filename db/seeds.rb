# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bathroom.destroy_all
User.destroy_all

require 'json'

bathroomRecords = JSON.parse(File.read("./data/bathroom.json"))

bathroomRecords["marker_list"].each do |bathroom|
    name = bathroom["marker"]["name"]
    lat = bathroom["marker"]["lat"].to_f
    lng = bathroom["marker"]["lon"].to_f

    Bathroom.create!(name: name, lat: lat, lng: lng);
end