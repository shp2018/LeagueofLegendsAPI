val = []
val_count = 0
while val_count<3:
    inp = int(input())
    val.append(inp)
    val_count +=1

P = val[0]
N = val[1]
R = val [2]
prev = N
infectors = N
day_count = 0
while infectors <= P:
    prev = (prev*R)
    infectors += prev
    day_count +=1

print(day_count)



