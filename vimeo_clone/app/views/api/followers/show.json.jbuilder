json.follower do
  json.partial! '/api/followers/follower', follower: @follower
end