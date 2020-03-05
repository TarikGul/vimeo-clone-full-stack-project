# == Schema Information
#
# Table name: video_categories
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class VideoCategory < ApplicationRecord

    validates :name, presence: true

    has_many :posts,
        foreign_key: :category_id,
        class_name: :Post

end
