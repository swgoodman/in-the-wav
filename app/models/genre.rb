class Genre < ApplicationRecord
  # Genre instance relationships
  belongs_to :album
end
