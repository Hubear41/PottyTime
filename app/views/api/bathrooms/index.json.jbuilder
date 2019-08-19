@bathrooms.each do |bathroom|
    json.set! bathroom.id do
        json.partial! "api/bathrooms/bathroom", bathroom
    end
end