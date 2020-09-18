val = []
num_count = 0
while num_count<3:
    inp = int(input())
    val.append(inp)
    num_count +=1

small = val[0] * 1
medium = val[1]* 2
large = val[2] * 3
score = small + medium + large

if score >=10:
    print ("happy")
else:
    print ("sad")
