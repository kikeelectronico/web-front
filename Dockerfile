FROM node:lts-alpine AS base
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN mkdir front
WORKDIR /front
COPY web-front ./
RUN npm install --no-package-lock
RUN npm run build
FROM nginx
RUN mkdir /html
COPY --from=base /front/build /html
COPY nginx_config.conf /etc/nginx/conf.d/default.conf