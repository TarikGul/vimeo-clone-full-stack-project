# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
VideoPlay.destroy_all
Follower.destroy_all
Like.destroy_all
Comment.destroy_all
Post.destroy_all
VideoCategory.destroy_all
User.destroy_all

# This is the user sections of the seed file

User.create({ username: 'guest', email: 'guest@gmail.com', password: 'password' })
User.create({ username: 'tarikOutDoors', email: 'tarik@gmail.com', password: 'password' })
User.create({ username: 'puppies', email: 'dogs@gmail.com', password: 'password' })
User.create({ username: 'kitties', email: 'kitty@gmail.com', password: 'password' })
User.create({ username: 'outoftown', email: 'outoftown@gmail.com', password: 'password' })

#This is the categories section of the seeds file

VideoCategory.create({ name: 'Adventure' })
VideoCategory.create({ name: 'DYI' })
VideoCategory.create({ name: 'Educational' })

#This is the post sections of the seed file

Post.create({ title: "Walking across America", user_id: User.first.id, category_id: VideoCategory.first.id, password_protected: false }) 
Post.create({ title: "Enjoying a sandwhich", user_id: User.first.id, category_id: VideoCategory.first.id, password_protected: false }) 
Post.create({ title: "Playing games", user_id: User.first.id, category_id: VideoCategory.first.id, password_protected: false }) 
Post.create({ title: "Coding is fun", user_id: User.first.id, category_id: VideoCategory.first.id, password_protected: false }) 
Post.create({ title: "Basic", user_id: User.first.id, category_id: VideoCategory.first.id, password_protected: false }) 
Post.create({ title: "basiccccc", user_id: User.first.id, category_id: VideoCategory.first.id, password_protected: false })

#This is the comments sections of the seeds file

Comment.create({ user_id: User.first.id, parent_comment_id: nil, child_comment_id: nil, post_id: Post.first.id, body: "it was a beautiful video! Good Job" })

#This is the likes section of the seeds file

Like.create({ user_id: User.first.id, comment_id: Comment.first.id })

#This is the Follows section of the seeds file

Follower.create({ user_id: User.first.id, follower_id: User.first.id + 1 })

#This is the video_play section of the seeds file

# VideoPlay.create({ user_id: 1, post_id: 1 })






VideoCategory.create({ name: 'Sports' })

def generate_random_string(n)
  alpha = ("a".."z").to_a
  sample = []

  (1..n).each do |i|
    rand_num = rand(0...27)
    sample << alpha[rand_num]
  end

  sample.join('')
end

def generate_hashed_name(rand_string = generate_random_string(7))
  puts rand_string
  alpha = ("a".."z").to_a
  sample = rand_string.split('')
  hashed_username = []
  i = 0
  sample.each_with_index do |char, i|
    mod = sample.length - 1 
    modded = alpha.length % mod
    if modded.odd?
      hashed_username << alpha[modded * 2 + i]
    else 
      num = modded * 3 + i
      if num > 10
        hashed_username << num.to_s + alpha[num % 10]
      else 
        hashed_username << alpha[num]
      end
      i += 1 
    end
  end
  return hashed_username.join('')
end

#______________________________________________
