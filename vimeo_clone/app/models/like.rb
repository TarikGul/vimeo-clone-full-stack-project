# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  comment_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :comment,
        foreign_key: :comment_id,
        class_name: :Comment

end
