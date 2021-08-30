# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
    {
        email: 'colorxyan@gmail.com',
        password: 'testing2021',
        password_confirmation: 'testing2021',
    }
]

users.each do |attribute|
    User.create attribute
end

apartments = [
    {    
        street: "3300 Renwick Ave",
        city: "Elk Grove", 
        state: "CA",
        manager: "manager",
        email: "manager@testing.com",
        price: "$2,348",
        bedrooms: 1,
        bathrooms: 1,
        pets: "Pets welcome!"
    },
    {    
        street: "9130 Nolan St",
        city: "Elk Grove",
        state: "CA",
        manager: "manager",
        email: "manager@testing.com",
        price: "$2,580",
        bedrooms: 2,
        bathrooms: 2,
        pets: "Pets welcome!"
    },
    {    
        street: "9589 Four Winds Drive",
        city: "Elk Grove",
        state: "Ca",
        manager: "manager",
        email: "manager@testing.com",
        price: "$3,790",
        bedrooms: 3,
        bathrooms: 2,
        pets: "Call for details"
    }
]

first_user = User.where(email: "colorxyan@gmail.com" ).first

apartments.each do |attribute|
    first_user.apartments.create attribute
end

