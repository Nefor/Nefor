class StaticPagesController < ApplicationController
  def index
    render 'frontend', layout: 'ng_book'
  end

  def frontend
    render layout: 'ng_book'
  end

  def backend
    if logged_in?
      @micropost  = current_user.microposts.build
      @feed_items = current_user.feed.paginate(page: params[:page])
    end
  end
end
