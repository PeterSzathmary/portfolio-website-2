import requests
import sys

lorem = "Idem si kúpiť knihu o anatómii."

if __name__ == "__main__":
    #print(f"Arguments count: {len(sys.argv)}")
    url = "http://18.218.116.226:3000/newjournal"
    if len(sys.argv) > 1:
        print(f"Sending to server {sys.argv[1]}")
        obj = {"content": sys.argv[1]}
    else:
        obj = {"content": lorem}

    for i in range(1):
        x = requests.post(url, data=obj)
        print(x)
