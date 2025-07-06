class User < ApplicationRecord
  before_save { self.username = username.downcase } 
  validates :username, presence: true, uniqueness: { case_sensitive: false }, length: { minimum: 3, maximum: 15 }
  has_secure_password
  has_many :messages
end
