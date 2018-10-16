class User < ApplicationRecord
  has_many :albums
  has_many :artists, through: :albums
  has_many :genres, through: :albums
end
