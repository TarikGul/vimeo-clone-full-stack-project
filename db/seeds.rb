# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

load(Rails.root.join( 'db', 'seeds', "#{Rails.env.downcase}.rb"))
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