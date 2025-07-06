class Message < ApplicationRecord
  belongs_to :user
  validates :body, presence: true
  scope :custom_display, -> { includes(:user).order(created_at: :asc).limit(20) }
end