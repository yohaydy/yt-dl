FROM node:alpine
COPY index.js /var/www/yt-dl/
COPY index.html /var/www/yt-dl/
COPY package.json /var/www/yt-dl/

RUN apk update && apk add bash

RUN set -xe \
    && apk add --no-cache ca-certificates \
    ffmpeg \
    openssl \
    python3 \
    aria2 \
    && pip3 install youtube-dl

WORKDIR /var/www/yt-dl
ENV NODE_ENV production
ENV PORT 8080
RUN npm i
EXPOSE 8080
CMD ["node", "index.js"]