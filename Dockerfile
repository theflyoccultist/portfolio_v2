# ---- Build Stage ---- 
FROM ruby:3.3-alpine AS build

RUN apk add --no-cache build-base

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./

RUN bundle config set --local path 'vendor/bundle' \
  && bundle install

COPY . .

# ---- Final Stage ---- 
FROM ruby:3.3-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app /usr/src/app

ENV GEM_PATH=/usr/src/app/vendor/bundle/ruby/3.3.0
ENV PATH=$GEM_PATH/bin:$PATH

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

