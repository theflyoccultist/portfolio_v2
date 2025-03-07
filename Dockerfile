# Use a lightweight Ruby image
FROM ruby:3.2-buster

# Set working directory
WORKDIR /usr/src/app

# Install dependencies first
COPY Gemfile Gemfile.lock ./
RUN gem install bundler:2.6 && bundle install

# Copy application code
COPY . ./

ENV RACK_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD ["ruby", "server.rb"]

