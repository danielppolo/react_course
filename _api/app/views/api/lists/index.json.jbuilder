json.array! @lists do |list|
  json.extract! list, :id, :title, :color
end