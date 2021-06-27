import requests
import sys
import random

"""
Es gibt keine Pointe (ein überraschender Schluss)

Das ist kein joke

Naja ich hab nichts mehr zu verlieren

Mir kann nichts mehr etwas anhaben

Mein Leben ist nichts weiter als eine Komödie

Ich bin es leid so zu tun als wäre es nicht witzig diese Männer zu töten

Komödien sind subjektiv Murray

Sagen das nicht alle?

Sie alle hier

Das System das so viel weiß

Ihr entscheidet was richtig und was falsch ist

Ganz genauso wie ihr entscheidet was witzig ist und was nicht

Kommen sie Murray, sehe ich aus wie jemand der eine Bewegung gründen kann

Ich hab die Typen getötet weil sie furchtbar waren

Alles ist absolut furchtbar in diesen Tagen

Da kann man ja gar nicht anders als verrückt werden

Die konnten einfach keinen einzigen Ton treffen, nicht ums verrecken

Wieso sind alle nur so aufgebracht wegen dieser Kerle

Wenn ich es wäre der dort auf dem gehweg krepiert würfet ihr alle über mich drüber steigen

Ich komm täglich an euch vorbei aber ihr bemerkt mich nicht, aber diese Kerle, nur weil Thomas Wayne wegen denen im Fernsehen rumgeflennt hat…

Wissen sie was da draußen wirklich abgeht Murray? Verlassen sie überhaupt jemals dieses Studio?

Die brüllen doch alle nur noch rum und schreien sich gegenseitig an
Niemand vergällt sich mehr zivilisiert,
Niemand denkt wie es sich anfühlt der andere zu sein.

Denken sie das Männer wie Thomas Wayne, sich jemals darüber Gedanken machen, wie es ist, wie ich zu sein?
Jemand anders zu sein als sie selbst?

Tun sie nicht. Sie sitzen da und denken das wir alles einstecken wie brave kleine Jungs!

Das wir nicht zum Werwolf werden und durchdrehen

Sie sind furchtbar Murray
Sie zeigen mein Video, laden mich in ihre Show ein, sie wollten sich einfach nur lustig über mich machen! Sie sind genau wie alle anderen!

Wie wäre es mit noch einem Joke

Was kriegst du wenn du einen verwirrten Einzelgänger mit einer Gesellschaft kreuzt die ihn behandelt wie dreck

Ich sag dir was du kriegst was du Verdienst!!

Dann schießt er

Gute Nacht und immer dran denken that’s…
"""

randomNumber = random.randint(100, 999)
print(randomNumber)
# this is working now, this will show with new lines in HTML
#lorem = f"Test\n\nTest{randomNumber}"

lorem = f"""Es gibt keine Pointe (ein überraschender Schluss)

Das ist kein joke

Naja ich hab nichts mehr zu verlieren

Mir kann nichts mehr etwas anhaben

Mein Leben ist nichts weiter als eine Komödie

Ich bin es leid so zu tun als wäre es nicht witzig diese Männer zu töten

Komödien sind subjektiv Murray

Sagen das nicht alle?

Sie alle hier

Das System das so viel weiß

Ihr entscheidet was richtig und was falsch ist

Ganz genauso wie ihr entscheidet was witzig ist und was nicht

Kommen sie Murray, sehe ich aus wie jemand der eine Bewegung gründen kann

Ich hab die Typen getötet weil sie furchtbar waren

Alles ist absolut furchtbar in diesen Tagen

Da kann man ja gar nicht anders als verrückt werden

Die konnten einfach keinen einzigen Ton treffen, nicht ums verrecken

Wieso sind alle nur so aufgebracht wegen dieser Kerle

Wenn ich es wäre der dort auf dem gehweg krepiert würfet ihr alle über mich drüber steigen

Ich komm täglich an euch vorbei aber ihr bemerkt mich nicht, aber diese Kerle, nur weil Thomas Wayne wegen denen im Fernsehen rumgeflennt hat…

Wissen sie was da draußen wirklich abgeht Murray? Verlassen sie überhaupt jemals dieses Studio?

Die brüllen doch alle nur noch rum und schreien sich gegenseitig an
Niemand vergällt sich mehr zivilisiert,
Niemand denkt wie es sich anfühlt der andere zu sein.

Denken sie das Männer wie Thomas Wayne, sich jemals darüber Gedanken machen, wie es ist, wie ich zu sein?
Jemand anders zu sein als sie selbst?

Tun sie nicht. Sie sitzen da und denken das wir alles einstecken wie brave kleine Jungs!

Das wir nicht zum Werwolf werden und durchdrehen

Sie sind furchtbar Murray
Sie zeigen mein Video, laden mich in ihre Show ein, sie wollten sich einfach nur lustig über mich machen! Sie sind genau wie alle anderen!

Wie wäre es mit noch einem Joke

Was kriegst du wenn du einen verwirrten Einzelgänger mit einer Gesellschaft kreuzt die ihn behandelt wie dreck

Ich sag dir was du kriegst was du Verdienst!!

Dann schießt er

Gute Nacht und immer dran denken that’s…"""

print(lorem)

to_public = False

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
