json.follower do
    json.partial! '/api/followers/follower', follower: @follower
end

# json.user do 
#   json.partial! '/api/users/user', user: @user.follower
# end