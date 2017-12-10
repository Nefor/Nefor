module Api
  class MoneyController < ApplicationController
    include Api::MoneyHelper
    def index
      render json: collect_data
    end

    def insert
      insert_money(params[:money])
      render json: {status: 'ok'}
    end

    def take
      take_money(params[:money])
      render json: {status: 'ok'}
    end
  end
end
