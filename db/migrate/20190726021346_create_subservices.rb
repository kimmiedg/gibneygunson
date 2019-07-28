class CreateSubservices < ActiveRecord::Migration[5.1]
  def change
    create_table :subservices do |t|
      t.string :name
      t.integer :service_id

      t.timestamps null: false
    end
  end
end
