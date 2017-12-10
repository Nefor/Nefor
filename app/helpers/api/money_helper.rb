module Api
  module MoneyHelper
    def collect_data
      total = 0
      banknotes = []
      coins = []
      Money.banknotes.each do |b|
        banknotes << [b.denomination.to_s, b.total]
        total += b.denomination * b.total
      end
      Money.coins.each do |c|
        coins << [c.denomination.to_s, c.total]
        total += c.coefficient * c.total
      end
      {
        status: 'ok',
        total: total,
        banknotes: banknotes,
        coins: coins
      }
    end

    def insert_money(data)
      info = JSON(data)
      info["banknotes"].each do |key, value|
        banknote = Money.banknotes.find_by_denomination(key.to_i)
        banknote.update(total: banknote.total += value.to_i)
      end
      info["coins"].each do |key, value|
        coin = Money.coins.find_by_denomination(key.to_i)
        coin.update(total: coin.total += value.to_i)
      end
    end

    def take_money(data)
      info = JSON(data)
      info["banknotes"].each do |key, value|
        banknote = Money.banknotes.find_by_denomination(key.to_i)
        banknote.update(total: banknote.total -= value.to_i) if banknote.total >= value.to_i
      end
      info["coins"].each do |key, value|
        coin = Money.coins.find_by_denomination(key.to_i)
        coin.update(total: coin.total -= value.to_i) if coin.total >= value.to_i
      end
    end
  end
end
