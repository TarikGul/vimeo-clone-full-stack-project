class Api::PostsController < ApplicationController

    def index
      @posts = Post.all
      render :index
    end

    def show
      @post = Post
        .includes(:comments).find(params[:id])
        # .includes(:plays) #added this line
        # .includes(:category) #added this line
        

      render :show
    end

    def create 
      @post = Post.find(params[:id])

      if @post.save(post_params)
        render :show
      else
        render json: @review, status: :unprocessable_entity
      end
    end


    private
    def post_params
        params.require(:post).permit(:title)
    end
end
