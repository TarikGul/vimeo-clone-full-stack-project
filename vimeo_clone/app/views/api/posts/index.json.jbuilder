@posts.each do |post|
    json.set! post.id do 
        json.partial! 'api/posts/post', post: post
        json.videoUrl url_for(post.video)
    end
end
