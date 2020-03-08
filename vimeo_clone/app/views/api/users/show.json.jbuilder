json.user do
  json.partial! '/api/users/user', user: @user 
end

json.user_posts do
  @user.posts.each do |post|
      json.set! post.id do
        json.partial! '/api/posts/post', post: post
      end
  end
end

# json.user_followers do 
#   @user.followers.each do |follower|
#     json.set! follower.id do
#       json.partial! '/api/followers/follower'
#     end
#   end
# end

# json.user_follows do
#   @user.leaders.each do |leader|
#     json.set! leader.id do
#       json.partial! '/api/followers/follower'
#     end
#   end
# end