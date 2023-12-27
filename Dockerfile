FROM denoland/deno:1.39.1


WORKDIR /app

COPY . .
# RUN deno task build

EXPOSE 8000

CMD ["task", "start"]