class VideoCategory < ApplicationRecord

    validates :name, presence: true

    has_many :posts,
        foreign_key: :category_id,
        class_name: :Post

end
