feature "Iteraction with money" do

  before :each do
    visit '/static_pages/frontend/search'
  end

  scenario "Get money status" do
    click_button 'Get Balance'
    expect(page).to have_content 'Banknotes:'
    expect(page).to have_content 'Coins:'
    expect(page).to have_content 'Total:'
  end

  scenario "Insert / get money " do
    click_button 'Put Money'
    within("#form") do
      fill_in '1 UAH', with: '1'
      fill_in '5 UAH', with: '5'
    end
    click_button 'Insert'
    click_button 'Get Balance'
    expect(page).to have_content '1 UAH : 1 available'
    expect(page).to have_content '5 UAH : 5 available'
    expect(page).to have_content 'Total: 26 UAH'

    click_button 'Take money back'
    within("#form") do
      fill_in '1 UAH', with: '1'
      fill_in '5 UAH', with: '2'
    end
    click_button 'Take my money!'
    click_button 'Get Balance'

    expect(page).to have_content '1 UAH : 0 available'
    expect(page).to have_content '5 UAH : 3 available'
    expect(page).to have_content 'Total: 15 UAH'
  end
end
