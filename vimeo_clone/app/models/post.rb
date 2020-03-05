class Post < ApplicationRecord

    validates :description, presence: true

    belongs_to :user, 
        foreign_key: :user_id,
        class_name: :user
    
    belongs_to :category,
        foreign_key: :category_id,
        class_name: :VideoCategory
    
    has_many :comments,
        foreign_key: :post_id,
        class_name: :Post

    has_many :plays,
        foreign_key: :post_id,
        class_name: :Post
end
