module Api
  class MoneyController < ApplicationController
    def index
      render json: {status: 'ok'}
    end
  end
end
