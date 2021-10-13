# rogauracore-gui
a gui made in electron to use rogauracore easily

![Alt text](https://user-images.githubusercontent.com/24620527/132206960-937f12f7-ee22-4649-9842-5c0c973c450d.png "Rogauracore GUI")

You can control both single and multi-zone colors, with the optional features for breathing colors (both single and multi) and colorcycle (only single).

N.B. You need to put the rogauracore executable in the bin folder of the project

original rogauracore tool can be found at https://github.com/wroberts/rogauracore, I just made the electron wrapper

# How to use rogauracore-gui

YOU NEED TO BE A SUDOER OR RUN THE PROGRAM AS ROOT SINCE THE ROGAURACORE DRIVER NEEDS ROOT PERMISSIONS TO TALK TO YOUR KEYBOARD

In order to use this application you need to install Node.js & NPM (https://nodejs.org/en/download/package-manager/) and Electron (https://www.electronjs.org/docs/latest/tutorial/quick-start). 
Be sure to install electron GLOBALLY (`npm -g i electron`)

After the installation is complete you just have to:
1) Clone this repository wherever you prefer to
2) Download and compile the latest realese from https://github.com/wroberts/rogauracore/releases and put the newly created rogauracore executable inside the /bin folder of the project (N.B. remember to rename the executable "rogauracore" if the name is different)
3) Launch from your terminal `electron /path/to/cloned/rogauracore-gui/` (you just need to specify the folder)
4) Have fun!

# Features
## Single Section
In the upper half of the gui you can find a few preconfigured buttons to select common colors (gree, red, blue, white and off) which change the color seen in the "preview" square. If you want to use a custom color you can pick it using the colorpicker on the left side. On the right side you can find the actual color selected expressed in hex representation. Right below the common colors row there are two checkboxes: breathing and colorcycle. 
If breathing is selected, a new color picker will show up to select the second color that will cycle in the breathing cycle of the keyboard, with a new numeric input field to specify the speed of the breathing (1,2 or 3).
If colorcycle is selected, just the speed input field will show up and the keyboard will cycle through every color of the spectrum at the selected speed.
If both are selected, everything releated to the breathing feature will be ignored.

Whenever you reach the desired configuration, just click on "confirm single color" to send the command to your keyboard and change its behaviour. 

N.B. the "off color" in this section is used to just turn off the keyboard to save battery. 

## Multi section
It works almost in the same way of the Single section but there is no "colorcycle" option. Instead you have 4 different sections of the keyboard which can be configured to use independent colors. In this case you have to click "confirm multi color" to use this configuration. 

Last but not least, there is a pre-configured 4-color scheme called rainbow which can be activated just by clicking on the "RAINBOWWWW" button at the bottom of the gui
