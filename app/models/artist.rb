class Artist < ApplicationRecord
  # Artist instance relationships
  belongs_to :album
end
