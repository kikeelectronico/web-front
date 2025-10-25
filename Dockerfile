FROM node:lts AS base
RUN apt-get update && apt-get install -y git
RUN mkdir front
WORKDIR /front
COPY gatsby ./
RUN git clone https://github.com/kikeelectronico/web-content.git content
RUN npm install --no-package-lock
RUN npm run build
FROM nginx
RUN mkdir /html
COPY --from=base /front/public /html
COPY nginx_config.conf /etc/nginx/conf.d/default.conf