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

def generate_random_string(n)
  alpha = ("a".."z").to_a
  sample = []

  (1..n).each do |i|
    rand_num = rand(0...27)
    sample << alpha[rand_num]
  end

  sample.join('')
end

# This is the user sections of the seed file

User.create({ username: 'guest', email: 'guest@gmail.com', password: 'password' })

(1..20).each do |i| 
  User.create({ 
    username: "User-" + generate_random_string(4), 
    email: generate_random_string(6) + "@gmail.com",
    password: 'password'
  })
end

#This is the categories section of the seeds file

VideoCategory.create({ name: 'Adventure' })
VideoCategory.create({ name: 'DYI' })
VideoCategory.create({ name: 'Educational' })
VideoCategory.create({ name: 'Outdoors' })
VideoCategory.create({ name: 'Creator' })
VideoCategory.create({ name: 'Easter Egg' })

#This is the post sections of the seed file
(0..20).each do |i|
  Post.create({ title: "Post-" + generate_random_string(7), user_id: User.first.id, category_id: VideoCategory.first.id, password_protected: false })
end


#This is the comments sections of the seeds file

(0..20).each do |i|
  Comment.create({
    user_id: User.first.id + i, 
    parent_comment_id: nil, 
    child_comment_id: nil, 
    post_id: Post.last.id - i, 
    body: "Comment -" + generate_random_string(5)
  })
end

#This is the likes section of the seeds file

Like.create({ user_id: User.first.id, comment_id: Comment.first.id })

#This is the Follows section of the seeds file

Follower.create({ user_id: User.first.id, follower_id: User.first.id + 1 })

#This is the video_play section of the seeds file

# VideoPlay.create({ user_id: 1, post_id: 1 })

# Attaches a video url to a post. This is how we would open a file and attach 
# It to the state of an object on the backend
Post.all.each do |post|
  post.video.attach(io: File.open("/Users/tarik/Desktop/videos/IMG_1159.MOV"), filename: "IMG_1159.MOV")
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
