
# State of the App 

** NOT WORKING YET ** see last section.

# Appless Acoustic Jamm Session game using only mobile phones

Inspired by the acting exercises done by great theater director Peter Brook, this mobile game tries to bring its benefits from acting to the free music improvisation community.

(https://www.youtube.com/watch?v=j0Q7eFj_1bU&feature=youtu.be&t=19m21s "The original version of the game explained by Peter Brook")

## What it does? 

1. Players place their phone in front of their instrument speaker
2. Players start to jamm. **The rule is: only one player can play at once**, otherwise a loud beep sounds which means the game has failed.
3. This exercise aims to train the ablity to "feel" others players will to join or leave. That is, to have the feeling of the "group common thought". Musicians can have the telepathy to know when one of their mates wants to take relay on the improv, allowing more playfull dynamics.

## How it work? (technically)

1. The game director enables a wifi hotspot network in his Android Phone and runs an App
2. Players connect to the hotspot, visit a web in their cellphones where they select their team **(no App installation is needed!)**.
3. Players place their mobile phones in front of their instrument speaker, director plugs his phone to a speaker
5. All the team calibrates the sensitivity of their phone in order to trigger the "I'm Playing" light in their phones only when their istrument is sounding (they should try that other instruments dont trigger this light in his own phone).
6. Director presses the toggle in his app and the game can start.


# Technical stuff for developers and directors

Required in server:
* Andoid phone, hotspot wifi capable.
* (https://play.google.com/store/apps/details?id=io.tempage.dorynode "Dory Node Android App")
* (http://droidparty.net/ "PdDroidParty") 
* This repository content placed in the /PdDroidParty folder

Required in players phone
* Navigator (safari/chrome)
* Wifi Connection


## Installation instructions
 * contact me via PM for them


## What does it lacks to be fully functional

### Completely necesary
* ssl autosigned certificates on the directors static webpage server in order to allow Microphone use throught html5 on the clients/players.s

### To avoid hardcoding when installing
* Auto get server's ip from url in the client html to know where to send the volume metics ( http://192.168.43.1 ) 
* Calibration slider on client website 
