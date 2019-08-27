class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable

  # normal auth
  validates :email, :encrypted_password, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def is_password?(password)
    bcrypt_password = BCrypt::Password.new(self.encrypted_password)
    bcrypt_password.is_password?(password)
  end

  def password=(password)
    @password = password
    self.encrypted_password = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.update(session_token: self.class.generate_session_token)
    self.session_token
  end


  private
  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
