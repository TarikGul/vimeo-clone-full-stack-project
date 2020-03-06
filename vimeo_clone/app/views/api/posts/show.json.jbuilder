json.post do 
  json.partial! '/api/posts/post', post: @post
  json.videoUrl  url_for(@post.video)
end

json.comments do 
    @post.comments.each do |comment|
    json.set! comment.id do 
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

# Need to add another includes for Likes 


# Need to add another includes for Plays




