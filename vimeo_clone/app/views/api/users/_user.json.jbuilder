json.extract! user, :username, :id, :email
json.followers do
  user.followers.each do |follow|
    json.set! follow.id do 
      followingUser = User.find(follow.user_id)
      json.username followingUser.username
      json.userId followingUser.id
    end
  end
end
json.leaders do 
  user.leaders.each do |leader|
    json.set! leader.id do 
      followingUser = User.find(leader.follower_id)
      json.username followingUser.username
      json.userId followingUser.id
    end
  end
end