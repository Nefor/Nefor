class Money < ApplicationRecord
  scope :banknotes, -> { where(kind: 'banknote') }
  scope :coins, -> { where(kind: 'coin') }
end
