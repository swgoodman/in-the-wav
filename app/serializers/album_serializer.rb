class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :release_date, :release_external_url, :release_image_url
end
