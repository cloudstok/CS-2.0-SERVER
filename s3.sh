#!/bin/sh



# Ititialization
mainmenu () {
  echo "Press 0 to update all"
  echo "Press 1 to update 11exch"
  echo "Press 2 to update clickbetexch1.0"
  echo "Press 3 to update helloexch"
  echo "Press 4 to update kheloyaar"
  echo "Press 5 to update laserbook"
  echo "Press 6 to update reddybook"
  echo "Press 7 to update tigerexch"
  echo "Press 8 to update yolo247"
  echo "Press 9 to update clickbetexch"
  echo "Press 10 to update fairplayexch"
  echo "Press 11 to update khiladi"
  echo "Press 12 to update lotusexch"
  echo "Press 13 to update sigmaexch"
  echo "Press 14 to update winbuzz"

  
  echo "Press x to exit the script"
  read  -n 1 -p "Input Selection:" mainmenuinput
  if [ "$mainmenuinput" = "0" ]; then
            all
        elif [ "$mainmenuinput" = "1" ]; then
            11exch
        elif [ "$mainmenuinput" = "2" ]; then
            clickbetexch10
        elif [ "$mainmenuinput" = "3" ]; then
            helloexch
        elif [ "$mainmenuinput" = "4" ]; then
            kheloyaar
        elif [ "$mainmenuinput" = "5" ]; then
            laserbook
        elif [ "$mainmenuinput" = "6" ]; then
            reddybook
        elif [ "$mainmenuinput" = "7" ]; then
            tigerexch
        elif [ "$mainmenuinput" = "8" ]; then
            yolo247
        elif [ "$mainmenuinput" = "9" ]; then
            clickbetexch
        elif [ "$mainmenuinput" = "10" ]; then
            fairplayexch
        elif [ "$mainmenuinput" = "11" ]; then
            khiladi
        elif [ "$mainmenuinput" = "12" ]; then
            lotusexch
        elif [ "$mainmenuinput" = "13" ]; then
            sigmaexch
        elif [ "$mainmenuinput" = "14" ]; then
            winbuzz
        elif [ "$mainmenuinput" = "x" ];then
            exit 1;
        elif [ "$mainmenuinput" = "X" ];then
            exit 1;
        else
            echo "You have entered an invallid selection!"
            echo "Please try again!"
            echo ""
            echo "Press any key to continue..."
            read -n 1
            clear
            mainmenu
        fi
}



elevenexch () {
cd /var/www/11exch
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/11exch/
}

clickbetexch10 () {
cd /var/www/clickbetexch1.0
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/clickbetexch1.0/
}

helloexch () {
cd /var/www/helloexch
npm i
npm run build
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/helloexch/
}

kheloyaar () {
cd /var/www/kheloyaar
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/kheloyaar/
}

laserbook () {
cd /var/www/laserbook
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/laserbook/
}

reddybook () {
cd /var/www/reddybook
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/reddybook/
}

tigerexch () {
cd /var/www/tigerexch
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/tigerexch/
}

yolo247 () {
cd /var/www/11exch
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/11exch/
}

clickbetexch () {
cd /var/www/clickbetexch
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/clickbetexch/
}

fairplayexch () {
cd /var/www/fairplayexch
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/fairplayexch/
}

khiladi () {
cd /var/www/khiladi
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/khiladi/
}

lotusexch () {
cd /var/www/lotusexch
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/lotusexch/
}

sigmaexchh () {
cd /var/www/sigmaexch
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/sigmaexch/
}

winbuzz () {
cd /var/www/winbuzz
aws s3 --profile s3sync cp --recursive dist s3://click-frontend-prod/Templates/winbuzz/
}


# This builds the main menu and routes the user to the function selected.
mainmenu

