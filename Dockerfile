FROM node:12

RUN apt-get update \
  && apt-get install --no-install-recommends -y \
  && apt-get install -y git \
  && apt-get install -y nano

RUN npm install -g react-native-cli
RUN npm install -g create-react-native-app
RUN npm install -g exp
RUN npm install --global expo-cli
RUN npm install -g tslint
RUN npm install -g tslint
RUN npx husky install

RUN mkdir /var/react-native-src
WORKDIR /var/react-native-src

CMD sleep infinity