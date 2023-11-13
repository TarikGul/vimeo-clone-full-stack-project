class Api::VideoPlaysController < ApplicationController

    def create
      @play = VideoPlay.new(play_params)

      if @play.save

      else
        flash.now[:errors] = @play.errors.full_messages
      end
    end

    private
    def play_params
      params.require(:play).permit(:post_id, :user_id)
    end

end
