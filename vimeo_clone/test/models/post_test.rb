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
require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
