class CreateMoney < ActiveRecord::Migration[5.1]
  def change
    create_table :money do |t|
      t.string :kind
      t.integer :denomination
      t.float :coefficient, precision: 5, scale: 2
      t.integer :total

      t.timestamps
    end
  end
end
