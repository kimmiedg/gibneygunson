class CreateUserProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :user_profiles do |t|
      t.string :name
      t.string :phone_no
      t.string :email
      t.string :position

      t.timestamps null: false
    end
  end
end
