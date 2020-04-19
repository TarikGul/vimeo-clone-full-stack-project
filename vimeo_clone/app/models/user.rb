# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password
    before_validation :ensure_session_token

    has_many :comments,
      foreign_key: :user_id,
      class_name: :Comment 

    has_many :likes, 
      foreign_key: :user_id,
      class_name: :Like

    has_many :posts,
      foreign_key: :user_id,
      class_name: :Post
    
    has_many :followers,
      foreign_key: :follower_id,
      class_name: :Follower
    
    has_many :leaders,
      foreign_key: :user_id,
      class_name: :Follower

    has_many :plays,
      foreign_key: :user_id,
      class_name: :VideoPlay

    
    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)

      return nil if user.nil?
      user && user.is_password?(password) ? user : nil
    end

    def password=(password)
      self.password_digest = BCrypt::Password.create(password)
      @password = password
    end

    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
      self.session_token = SecureRandom.urlsafe_base64(16)
      self.save
      self.session_token
    end

    def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
