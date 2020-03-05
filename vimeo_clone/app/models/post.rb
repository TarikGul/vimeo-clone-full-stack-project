# == Schema Information
#
# Table name: posts
#
#  id                 :bigint           not null, primary key
#  title              :string           not null
#  user_id            :integer          not null
#  category_id        :integer          not null
#  password_protected :boolean          not null
#  password_digest    :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Post < ApplicationRecord

    validates :title, presence: true

    belongs_to :user, 
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :category,
        foreign_key: :category_id,
        class_name: :VideoCategory
    
    has_many :comments,
        foreign_key: :post_id,
        class_name: :Post

    has_many :plays,
        foreign_key: :post_id,
        class_name: :Post

    has_one_attached :video
    
end
