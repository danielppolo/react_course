json.extract! @list, :id, :title, :color
json.tasks @list.tasks do |task|
  json.extract! task, :id, :title, :note, :due_date, :done
end