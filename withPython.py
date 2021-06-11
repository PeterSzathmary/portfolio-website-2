import requests
import sys

lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget mi scelerisque, pharetra neque quis, dictum dolor. Sed metus enim, egestas vel ex non, commodo ultricies magna. Pellentesque volutpat dictum libero a ultrices. Mauris et velit in est ornare rhoncus a at neque. Ut ullamcorper gravida vulputate. Praesent sed odio lorem. Nulla tempor est quis odio vehicula, sed tincidunt sapien feugiat. Suspendisse nec magna dolor. Sed id placerat arcu. Phasellus et urna mauris. Donec ligula eros, consequat eget eleifend vitae, convallis eu ex. Donec cursus metus a ipsum viverra gravida. "

if __name__ == "__main__":
    #print(f"Arguments count: {len(sys.argv)}")
    url = "http://localhost:3000/journals"
    if len(sys.argv) > 1:
        print(f"Sending to server {sys.argv[1]}")
        obj = {"content": sys.argv[1]}
    else:
        obj = {"content": lorem}

    for i in range(3):
        x = requests.post(url, data=obj)
        print(x)
