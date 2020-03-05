# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  user_id           :integer          not null
#  parent_comment_id :integer
#  post_id           :integer          not null
#  child_comment_id  :integer          not null
#  body              :text             not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord

    validates :body, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :child_comments,
        foreign_key: :child_comment_id,
        class_name: :Comment,
        optional: true

    belongs_to :parent_comment,
        foreign_key: :parent_comment_id,
        class_name: :Comment

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post

    has_many :likes, 
        foreign_key: :comment_id,
        class_name: :Comment


    def comments_by_parent
        comments_by_parent = Hash.new { |hash, key| hash[key] = [] }

        self.comments.includes(:user).each do |comment|
            comments_by_parent[comment.parent_comment_id] << comment
        end

        comments_by_parent
    end

end
