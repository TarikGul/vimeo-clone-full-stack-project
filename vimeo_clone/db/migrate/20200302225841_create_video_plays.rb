class CreateVideoPlays < ActiveRecord::Migration[5.2]
  def change
    create_table :video_plays do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.timestamps
    end
    add_index :video_plays, :user_id
    add_index :video_plays, :post_id
  end
end
