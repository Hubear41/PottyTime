@categories.each do |category|
    json.set! category.id do
        json.extract! category, :id, :name, :bathroom_ids
    end
end