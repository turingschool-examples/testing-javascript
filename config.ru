require './server/server'

examples = Rack::Directory.new(File.join(Dir.pwd, '/examples'))
bower = Rack::Directory.new(File.join(Dir.pwd, '/vendor'))

run Rack::URLMap.new(
                     "/" => examples,
                     "/api" => TestingJavaScript,
                     "/vendor" => bower
                     )