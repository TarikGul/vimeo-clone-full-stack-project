class Api::PostsController < ApplicationController
    #what is wrong with this
    def index
      @posts = Post.all
      render :index
    end

    def show
      @post = Post
        .includes(:comments)
        .includes(:likes)
        .find(params[:id])
        
      render :show
    end

    def create 
      @post = Post.new(post_params)

      if @post.save(post_params)
        render :show
      else
        render json: @post, status: :unprocessable_entity
      end
    end

    def destroy
      @post = Post.find(params[:id])
      if @post.destroy
        render json: :success
      end
    end


    private
    def post_params
        params.require(:post).permit(:title, :user_id, :video_url, :thumbnail_url, :category_id, :password_protected)
    end
end
