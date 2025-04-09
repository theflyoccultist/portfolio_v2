# ---- Build Stage ---- 
FROM ruby:3.3-alpine AS build

RUN apk add --no-cache build-base

WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle config --global frozen 1 \
  && bundle install

COPY . .

# ---- Final Stage ---- 
FROM ruby:3.3-alpine

WORKDIR /app

COPY --from=build /app /app

RUN apk add --no-cache \
    libstdc++ \
    libffi \
    yaml \
    zlib \
    openssl \
    tzdata

ENV RACK_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["ruby", "server.rb"]

