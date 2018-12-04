docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3
docker run --name pg -e POSTGRES_PASSWORD=password -d postgres
