class Api::VideoPlaysController < ApplicationController

    def create
      @play = VideoPlay.new(play_params)

      if @play.save
        render :show
      else
        flash.now[:errors] = @play.errors.full_messages
      end
    end

    private
    def play_params
      params.require(:video_play).permit(:post_id, :user_id)
    end

end
