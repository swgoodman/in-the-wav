class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :name, :arist, :release_date, :release_external_url, :release_image_url
end
