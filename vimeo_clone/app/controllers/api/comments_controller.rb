class Api::CommentsController < ApplicationController

    def show
      @comment = comment.find(params[:id])
    end

    #This logic might need to be =revisited myight be a bug during testing
    def create
      @comment = current_user.comments.new(comment_params)

      if @comment.save
        render :show
      else
        render :json @comment, status: :unprocessable_entity
      end
    end

    private

    def comment_params
      params.require(:comment).premit(:body)
    end
end
