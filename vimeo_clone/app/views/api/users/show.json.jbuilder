json.partial! '/api/users/user', user: @user 


json.user_posts do
  @user.posts.each do |post|
      json.set! post.id do
        json.partial! '/api/posts/post', post: post
      end
  end
end

json.user_followers do 
  @user.followers.each do |follower|
    json.set! follower.id do
      json.partial! '/api/followers/follower', follower: follower
    end
  end
end

json.user_leaders do
  @user.leaders.each do |follower|
    json.set! follower.id do
      json.partial! '/api/followers/follower', follower: follower
    end
  end
end