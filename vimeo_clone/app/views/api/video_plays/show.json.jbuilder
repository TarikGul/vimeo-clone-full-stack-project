json.play do 
  json.partial `/api/video_plays/video_play`, play: @play
end

json.post do
    json.partial `/api/posts/post`, post: @post.plays
end