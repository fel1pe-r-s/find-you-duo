import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from 'cors'
import { converThourStringtoMinuts } from "./utils/convert-hour-string-to-minuts";
import { converMinutsThourStringto } from "./utils/convert-minutes-to-hour-string";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:5173/'
}))

const port = 3333;

app.get("/", (request, response) => {
  return response.send(`Conectado com sucesso`);
});

app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  return response.json(games);
});

app.post("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;
  const body: any = request.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yarsPlayng: body.yarsPlayng,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: converThourStringtoMinuts(body.hourStart),
      houtEnd: converThourStringtoMinuts(body.houtEnd),
      useVoiceChannel: body.useVoiceChannel,
    },
  });

  return response.status(201).json(ad);
});

app.get("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      yarsPlayng: true,
      weekDays: true,
      hourStart: true,
      houtEnd: true,
      useVoiceChannel: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return response.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
        hourStart: converMinutsThourStringto(ad.hourStart),
        houtEnd: converMinutsThourStringto(ad.houtEnd)
      };
    })
  );
});

app.get("/ads/:id/discord", async (request, response) => {
  const adId = request.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });
  return response.json({
    discord: ad.discord,
  });
});

app.listen(port);
