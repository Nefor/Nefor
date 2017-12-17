FactoryBot.define do
  factory :money do
    trait :banknote do
      kind 'banknote'
      denomination {[1, 2, 5, 10, 20, 50, 100, 200, 500].sample}
    end

    trait :coin do
      kind 'coin'
      denomination {[1, 2, 5, 10, 25, 50].sample}
    end
  end
end
