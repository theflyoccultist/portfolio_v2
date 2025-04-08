FROM ruby:3.3-alpine

RUN bundle config --global frozen 1

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./

RUN apk add --no-cache build-base

RUN bundle install

COPY . .

ENV RACK_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["ruby", "server.rb"]

