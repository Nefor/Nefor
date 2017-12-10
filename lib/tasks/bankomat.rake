namespace :bankomat do
  COINS_DENOMINATION_LESS_1_UAH = [1, 2, 5, 10, 25, 50]
  # COINS_DENOMINATION_MORE_1_UAH = []
  BANKNOTES_DENOMINATION = [1, 2, 5, 10, 20, 50, 100, 200, 500]

  desc "rake bankomat:Seed"
  task Seed: :environment do
    # Coins which cost < 1 UAH
    COINS_DENOMINATION_LESS_1_UAH.each do |coin_denomination|
      coin = Money.coins.where(denomination: coin_denomination)
      if coin.present?
        puts "Oops! Here already exist coin with (#{coin_denomination})"
        next
      end
      create_coin(coin_denomination, coin_denomination * 0.01)
      puts "Coin (#{coin_denomination}) was created!"
    end

    # Banknotes
    BANKNOTES_DENOMINATION.each do |banknote_denomination|
      banknote = Money.banknotes.where(denomination: banknote_denomination)
      if banknote.present?
        puts "Oops! Here already exist banknote with (#{banknote_denomination})"
        next
      end
      create_banknote(banknote_denomination, banknote_denomination * 1)
      puts "Banknote (#{banknote_denomination}) was created!"
    end
  end

  def create_coin(denomination, coefficient)
    Money.create(kind: 'coin', denomination: denomination, coefficient: coefficient, total: 0);
  end

  def create_banknote(denomination, coefficient)
    Money.create(kind: 'banknote', denomination: denomination, coefficient: coefficient, total: 0);
  end
end
