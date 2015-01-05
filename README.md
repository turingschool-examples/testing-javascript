# JavaScript Testing

## Step Zero: Get Yourself Some Dependencies

If you don't have [Bower](http://bower.io), you're going to need it.

```shell
sudo npm install bower
```

Once you have Bower, install the dependencies.

```shell
bower install
bundle
```

Whammy! Your dependencies are installed in `./vendor`. The system works.

## Step One: Fire Up the Server

At this very moment, there is [a little bit of a incompatibility](https://github.com/sinatra/sinatra/pull/907) that affects the way we have our server set up.

As a result, you *have to* fire up the server with `bundle exec rackup`. Doing it this way will make sure we have the right version of Rack with the right version of Sinatra. I can't make any promises that it will work if you go rogue.

### Step Two: Let's Test Some JavaScript

We're going to step through six examples. Five of them have opportunities for you to cut your teeth on writing some Qunit tests.