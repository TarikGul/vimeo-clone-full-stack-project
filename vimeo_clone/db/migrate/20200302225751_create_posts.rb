class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.integer :category_id, null: false
      t.integer :active_storage_video_id, null: false
      t.text :description, null: false
      t.boolean :password_protected, null: false
      t.string :password_digest 
      t.timestamps
    end
    add_index :posts, :user_id
    add_index :posts, :category_id
    add_index :posts, :active_storage_video_id
  end
end
