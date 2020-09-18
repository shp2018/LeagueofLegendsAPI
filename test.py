def rental_car_cost(days):
  total = 40 * days
  
  if days >= 7:
    return total -= 50
  elif days >= 3:
    total -= 20
    
  return total

print (rental_car_cost(5))

