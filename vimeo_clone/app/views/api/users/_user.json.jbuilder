json.extract! user, :username, :id, :email
json.followers user.followers.each do |follow|
  followingUser = User.find(follow.user_id)
  json.username followingUser.username
  json.userId followingUser.id
end
json.leaders user.leaders.each do |follow|
  followingUser = User.find(follow.follower_id)
  json.username followingUser.username
  json.userId followingUser.id
end