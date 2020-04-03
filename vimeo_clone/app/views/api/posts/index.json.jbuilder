@posts.each do |post|
    json.set! post.id do 
        json.partial! 'api/posts/post', post: post
        json.plays post.plays
        json.videoUrl url_for(post.video)
        json.thumbnailUrl url_for(post.thumbnail)
    end
end
