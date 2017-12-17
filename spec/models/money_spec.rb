require "rails_helper"

RSpec.describe Money, :type => :model do
  context "with different kind of money" do
    it "can take money of one kind" do
      first_banknote = create :money, :banknote
      second_banknote = create :money, :banknote
      first_coin = create :money, :coin
      second_coin = create :money, :coin
      expect(Money.banknotes).to eq([first_banknote, second_banknote])
      expect(Money.coins).to eq([first_coin, second_coin])
    end
  end
end
