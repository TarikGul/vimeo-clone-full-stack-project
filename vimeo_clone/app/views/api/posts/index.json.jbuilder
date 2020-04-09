@posts.each do |post|
    json.set! post.id do 
        json.partial! 'api/posts/post', post: post
        json.plays post.plays.length
        json.title post.title
        json.description post.description
        json.videoUrl url_for(post.video)
        json.thumbnailUrl url_for(post.thumbnail)
        json.uploader post.user
        json.uploaderPosts do 
            post.user.posts.each do |post|
                json.set! post.id do
                    json.id post.id
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
end
