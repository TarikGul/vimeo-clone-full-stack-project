class Api::FollowersController < ApplicationController

  def create
    @follower = Follower.new(follower_params)

    if @follower.save
      render :show
    else
      flash.now[:errors] = @follower.errors.full_messages
      render json: @follower.errors.full_messages, status: 418
    end
  end

  def destroy
    @follower = Follower.find(params[:id])
    
    if @follower
      @follower.destroy
      render :show
    else
      render json: ['Cant Follow User'], status: :unprocessable_entity
    end
  end

  private 
  def follower_params
    params.require(:follow).permit(:user_id, :follower_id)
  end
end
