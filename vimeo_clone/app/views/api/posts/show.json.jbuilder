json.post do 
  json.partial! '/api/posts/post', post: @post
  json.videoUrl url_for(@post.video)
  json.thumbnailUrl url_for(@post.thumbnail)
  json.uploader @post.user
end

json.comments do 
  @post.comments.each do |comment|
    json.set! comment.id do 
      json.partial! 'api/comments/comment', comment: comment
      json.user comment.user
    end
  end
end


# Need to add another includes for Likes 

# Plays is not working from the model level and im having problems with crating the seed
# json.plays do 
#     @post.plays.each do |play|
#       json.array! play.id do 
#         json.partial! 'api/plays/play', play: play
#       end
#     end
# end
# Need to add another includes for Plays


