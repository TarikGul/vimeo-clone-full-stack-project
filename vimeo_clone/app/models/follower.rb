# == Schema Information
#
# Table name: followers
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Follower < ApplicationRecord

    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User
    
    belong_to :leader,
        foreign_key: :user_id,
        class_name: :User
end
