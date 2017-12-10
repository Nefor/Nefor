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
  end
end
