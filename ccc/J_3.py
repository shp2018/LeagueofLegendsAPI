lines = int(input())
values = []
new= ','.join(values) 

for i in range((lines)):
    data = input().split()
    values.append(data)
    
maximum = max(values)
minimum = min(values)
a = maximum[0]
b = minimum[0]

big = a[0]+a[1]
small = b[0]+b[1]


maximum_1 = max(new)
minimum_1 = min(new)
a_1 = maximum_1[0]
b_1 = minimum_1[0]
big_1 = a_1[0]+a_1[1]
small_1 = b_1[0]+b_1[1]
print(big)
print(big_1)
print(small)
print(small_1)