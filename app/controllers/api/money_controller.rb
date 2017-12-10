module Api
  class MoneyController < ApplicationController
    include Api::MoneyHelper
    def index
      render json: collect_data
    end
  end
end
