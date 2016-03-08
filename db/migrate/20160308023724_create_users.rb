class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.string :user_name
    	t.string :email
    	t.string :clan_tag
    	t.timestamps
    end
  end
end
