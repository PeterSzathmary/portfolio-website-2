import requests
import sys

lorem = "This is amazing! I learned something new again from here: https://the.earth.li/~sgtatham/putty/0.60/htmldoc/Chapter5.html"

to_public = True

if __name__ == "__main__":
    #print(f"Arguments count: {len(sys.argv)}")
    if to_public:
        url = "http://18.218.116.226:3000/newjournal"
    else:
        url = "http://localhost:3000/newjournal"
    if len(sys.argv) > 1:
        print(f"Sending to server {sys.argv[1]}")
        obj = {"content": sys.argv[1]}
    else:
        obj = {"content": lorem}

    for i in range(1):
        x = requests.post(url, data=obj)
        print(x)
