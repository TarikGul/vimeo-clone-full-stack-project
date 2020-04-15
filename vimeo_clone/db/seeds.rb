# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#File that the seed videos will come from
mp4_file = [
  'beach.mp4',
  'buildings.mp4',
  'final_video.mp4',
  'trees.mp4'
]

#file that the seed thumbnails will come from
thumbnails = [
  'beach.png',
  'buildings.png',
  'thumbnail.png',
  'trees.png'
]

post_names = [
  'Watching Sunsets',
  "Creating a birdhouse",
  "Imagine a world of Silence",
  "This is my bestfriend",
  "I cant sleep, but i can dream",
  "Maybe, just maybe",
  "The Experience",
  "Sky High",
  "Playing Nice",
  "Washing Your Hands",
  "May",
  "Adventure's On The Ground",
  "Follow the leader",
  "Like it or not",
  "Montana, and more",
  "Architects",
  "This is Amazing",
  "Cards or not",
  "The Coast is my Heart",
  "Walking never ends",
  "Just Live",
  "Music for the soul",
  "Recent Discoveries",
  "Memories",
  "Sealing The Pain",
  "Friendships",
  "School for thought",
  "Pennies",
  "Where and how",
  "Make ammends",
  "Watch the fallen",
  "Sand is all I need"
]

VideoPlay.destroy_all
Follower.destroy_all
Like.destroy_all
Comment.destroy_all
Post.destroy_all
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

def generate_random_number(n)
  sampleSymbols = ['!', '@', '#', '$', '%', '&', '?', '*']
  sample = ''

  (0..n).each do |i|
    sample += rand(10).to_s
  end

  (0..(rand(n)+1)/2).each do |i|
    sample[rand(n) - 1] = sampleSymbols.sample()
  end
  sample
end

def generate_random_description(n)
  description = [];
  
  rand_length = rand(3..7)
  (0..n).each do 
    rand_word = generate_random_string(rand_length)
    if rand_word[-1] == 'c'
      description << (rand_word + '.')
    else 
      description << rand_word
    end
  end

  return description.join(' ')
end

# This is the user sections of the seed file

User.create({ username: 'bot-life', email: 'bot-bimeo@gmail.com', password: 'password'})
User.create({ username: 'guest', email: 'guest@gmail.com', password: 'password' })
(1..20).each do |i| 
  User.create({ 
    username: "User-" + (generate_random_string(4) + generate_random_number(8)), 
    email: generate_random_string(6) + "@gmail.com",
    password: 'password'
  })
end

random_user = rand(User.all.length - 10) + 8


#This is the post sections of the seed file
(0..12).each do |i|
  x = i % 4
  movie = FFMPEG::Movie.new("/Users/tarik/Desktop/videos/#{mp4_file[x]}")

  post = Post.create!({ 
    title: post_names[i], 
    user_id: User.all[rand(User.all.length - 10) + 9].id, 
    password_protected: false,
    description: generate_random_description(60),
    duration: movie.duration
  })

  post.video.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_videos', "#{mp4_file[x]}")), filename: mp4_file[x])
  post.thumbnail.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_photos', "#{thumbnails[x]}")), filename: thumbnails[x])
  puts "#{i}/26"
end

random_post = rand(Post.all.length - 10) + 8

#This is the Follows section of the seeds file

# ----------------Follower.create({ user_id: User.all[random_user].id, follower_id: User.all[random_user].id })

(4..10).each do |i|
  leaderUser = User.all[i]
  Follower.create({ user_id: leaderUser.id, follower_id: User.all[2].id })
end

(7..15).each do |i|
  leaderUser = User.all[i]
  Follower.create({ user_id: leaderUser.id, follower_id: User.all[3].id })
end

# Attaches a video url to a post. This is how we would open a file and attach 
# It to the state of an object on the backend



# counter = 0
# Post.all.each do |post|
#   counter = 0 if counter == 4
#   puts counter

#   post.video.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_videos', "#{mp4_file[counter]}")), filename: mp4_file[counter])
#   post.thumbnail.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_photos', "#{thumbnails[counter]}")), filename: thumbnails[counter])
#   counter += 1 
# end

(0..12).each do |i|
  movie = FFMPEG::Movie.new("/Users/tarik/Desktop/videos/final_video.mp4")
  post = Post.create!({ 
    title: post_names[i + 12], 
    user_id: User.first.id + 1, 
    password_protected: false,
    description: generate_random_description(60),
    duration: movie.duration
   })
  post.video.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_videos', 'final_video.mp4')), filename: 'final_video.mp4')
  post.thumbnail.attach(io: File.open(Rails.root.join('lib', 'seeds', 'additional_photos', "thumbnail.png")), filename: 'thumbnail.png')
end

# This is the like section of the seeding data

(0..6).each do |i|
  (0...20).each do |j|
    Like.create({ user_id: User.all[i].id, post_id: Post.all[j].id })
  end
end

(7..12).each do |i|
  (0...15).each do |j|
    Like.create({ user_id: User.all[i].id, post_id: Post.all[j].id })
  end
end

#This is the comments sections of the seeds file

(0...26).each do |i|
  Comment.create({
    user_id: User.first.id, 
    parent_comment_id: nil, 
    child_comment_id: nil, 
    post_id: Post.all[i].id, 
    body: "This is your friendly neighborhood bot. Enjoy Bimeo, wash your hands, and stay at home :)!"
  })
end

random_comment = rand(Comment.all.length - 5) + 4

#This is the video_play section of the seeds file

# VideoPlay.create({ user_id: 1, post_id: 1 })

(0..20).each do |i|
  (0..200).each do |j|
    VideoPlay.create({ user_id: User.all[i].id, post_id: Post.all[i].id })
  end
end

(0..20).each do |i|
  (0..167).each do |j|
    VideoPlay.create({ user_id: User.all[rand(18) + 1].id, post_id: Post.all[rand(19) + 1].id })
  end
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


# Comment.create({
#     user_id: User.first.id , 
#     parent_comment_id: nil, 
#     child_comment_id: nil, 
#     post_id: Post.last.id - 2, 
#     body: "Comment -" + generate_random_string(5) + generate_random_number(60)
# })

# def get_movie_duration video_file
#   ffmpeg_output = `/usr/local/bin/ffmpeg -i "#{video_file}" 2>&1`
#   /duration: ([0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{2})/i.match(ffmpeg_output) { |m| return m[1] }
#   return "FFMPEG ERROR"
# end

#ActiveStorage::Analyzer::VideoAnalyzer.new(a.blob).metadata[:duration]