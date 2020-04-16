class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.bigint :duration, null: false
      t.bigint :bytes, null: false
      t.boolean :password_protected, null: false
      t.string :password_digest 
      t.text :description, null: false
      t.timestamps
    end
    add_index :posts, :user_id
  end
end
