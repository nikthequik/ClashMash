class User < ActiveRecord::Base
	validates :user_name, presence:true, length: {minimum: 4, maximum: 16}
	validates :email, presence:true, length: {minimum: 4, maximum: 16}
	validates :clan_tag, presence:true, length: {minimum: 8, maximum: 8}
end