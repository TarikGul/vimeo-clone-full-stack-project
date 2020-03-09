class Api::CommentsController < ApplicationController

    def index
      @comments = Comment.all
      render :index
    end

    def show
      @comment = comment.find(params[:id])
    end

    #This logic might need to be =revisited myight be a bug during testing
    def create

      @comment = Comment.new(comment_params)

      @comment[:post_id] = params[:comment][:postId]
      @comment[:user_id] = current_user.id

      if @comment.save
        render :show
      else
        render json: @comment.errors.full_messages, status: 422
      end
    end

    def delete
      @comment = Comment.find(params[:id])

      if @comment.destroy
        render :show
      else
        render json: @comment.errors.full_messages, status: 422
      end
    end

    private

    def comment_params
      params.require(:comment).permit(:body)
    end
end
