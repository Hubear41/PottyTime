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



p bathroom_hashes.select{|hash| hash['category_name'] == "Public" }