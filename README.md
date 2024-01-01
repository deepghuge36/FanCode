# FanCode React Test

#https://fan-code.vercel.app/

As per the Requirement i have added the code

## API Reference

#### Get all Movies

```http
https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=2012&page=1&vote_count.gte=100
```

| Parameter | Type                               | Description                |
| :-------- | :--------------------------------- | :------------------------- |
| `api_key` | `2dca580c2a14b55200e784d157207b4d` | **Required**. Your API key |

## Genre

```http
https://api.themoviedb.org/3/genre/movie/list?language=en&sort_by=popularity.desc&primary_release_year=2012&page=1&api_key=2dca580c2a14b55200e784d157207b4d
```

| Parameter | Type                               | Description                |
| :-------- | :--------------------------------- | :------------------------- |
| `api_key` | `2dca580c2a14b55200e784d157207b4d` | **Required**. Your API key |

## Screenshots

![Desktop Screenshot](https://raw.githubusercontent.com/deepghuge36/FanCode/master/public/img/desktop.png?token=GHSAT0AAAAAACMHX4P6H5D4A3TPZZ47RN44ZMTI3SQ)

![Mobile Screenshot](https://raw.githubusercontent.com/deepghuge36/FanCode/master/public/img/mobile.png?token=GHSAT0AAAAAACMHX4P7IIULMCU235ZXBC3SZMTITNQ)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_KEY = "2dca580c2a14b55200e784d157207b4d`

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Feedback

If you have any feedback, please reach out to us at deepghuge@gmail.com

9821959912 what's App
