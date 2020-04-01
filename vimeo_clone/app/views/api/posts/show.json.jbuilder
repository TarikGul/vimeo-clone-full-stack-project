json.post do 
  json.partial! '/api/posts/post', post: @post
  json.videoUrl url_for(@post.video)
  json.thumbnailUrl url_for(@post.thumbnail)
  json.description @post.description
  json.uploader @post.user
  json.uploaderPosts do 
    @post.user.posts.each do |post|
      json.set! post.id do
        json.id post.id
        json.category_id post.category_id
        json.title post.title
        json.userId post.user_id
        json.description post.description
        json.passwordProtected post.password_protected
        json.thumbnailUrl url_for(post.thumbnail)
        json.videoUrl url_for(post.video)
      end
    end
  end
end

json.comments do 
  @post.comments.each do |comment|
    json.set! comment.id do 
      json.partial! 'api/comments/comment', comment: comment
      json.user comment.user
    end
  end
end

# json.uploads do 
#   @post.user.posts do |post|
#     json.set! post.id do
#       json.thumnailUrl url_for(post.thumbnail)
#       json.videoUrl url_for(post.video)
#     end
#   end
# end

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


