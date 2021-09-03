# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
    {
      email: 'xu@apartmentus.com',
      password: 'password1!'
    },
    {
      email: 'yan@apartmentus.com',
      password: 'password2!'
    }
  ]
  
  users.each do |attr|
    User.create attr
    p "creating user #{attr}"
  end
  
  apartments = [
    {
      street: '9130 Nolan St.',
      city: 'Elk Grove',
      state: 'Ca',
      manager: 'manager',
      email: 'manager@sienavillas.com',
      price: '$2,889 / month',
      bedrooms: 2,
      bathrooms: 2,
      pets: 'Pets Welcome!'
    },
    {
      street: '10270 E Taron Dr.',
      city: 'Elk Grove',
      state: 'CA',
      manager: 'info',
      email: 'info@stonelake.com',
      price: '$2,235/ month',
      bedrooms: 2,
      bathrooms: 1,
      pets: 'Large animals not permitted.'
    },
    {
      street: '3300 Renwick Ave.',
      city: 'Elk Grove',
      state: 'CA',
      manager: 'castellino',
      email: 'cast@castellino.com',
      price: '$4,567 / month',
      bedrooms: 3,
      bathrooms: 2,
      pets: 'Pets permitted with deposit'
    },
    {
      street: '9589 Four Winds Dr.',
      city: 'Elk Grove',
      state: 'CA',
      manager: 'Susan',
      email: 'susan@lakepoint.com',
      price: '$2,302 / month',
      bedrooms: 2,
      bathrooms: 2,
      pets: 'Please call for details.'
    }
  ]
  
  xu = User.where(email: 'xu@apartmentus.com').first
  yan = User.where(email: 'yan@apartmentus.com').first
  
  apartments.each_with_index do |attr, index|
    if index < 2
      xu.apartments.create attr
      p "creating apartment #{attr}"
    else
      yan.apartments.create attr
      p "creating apartment #{attr}"
    end
  end
  
  