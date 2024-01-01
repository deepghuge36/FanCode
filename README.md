# FanCode React Test

# https://fan-code.vercel.app/

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

![Desktop Screenshot](https://lh3.googleusercontent.com/pw/ABLVV87w5RSPdlqu_uX4nrBZEeCfb5dfehb4MVvEsdPWtFq-dZ_fEUSLBXVBzGmxphWOOWjq6-p0EPP7UVTHLLhD7wZ5LeVYiY68d84eTlzCPh284Qlh4nj4kX5BZiIaKctz5-ECXvnB6objMNO6uof18zIDl3apqTxqC0IFCEfmuyHUCp-5UuFql3H5Ag5Jqb6cy7JFbqgHY24GAVSTON9-6Op9QrRMHQHxI38auUzjpQ4FVYCnLHpweF4PwG-I3q8t7YJukdxhd5W3weaivmg1lSksHzX6enoM7MBC20VUzWNbH98e_GScy2cWYCJcQdxpVdVjOdCmgubigj3eWmjnjguEFLzCvywBEKWDmduD9Y_wr7enaR_2ekixV_gEOvnrR6FcVQK-VQlibrEtlpL2oOG9jtOTL1LWi_hp42BwgXdwtbTV2M7J7f6S1hFny6SSxeCSxTxDG3wM4wYlX5aaw29S1OHx2oY3kFD3pQ0xZapcXxRv8AVJlqiweWi_G0Pm2YZFskyG-6zagX2UOk-kTxabNYwVyvajjVvmVjNlhq_q8vk7kgFPCPFnjVfflHewhuSTtyo1PU5stu0DjmxPAOy7aY-Ya9dADrAlbcetK7Ke45iSRGAD80QNYHkzHDOZSftl6VyGVIZ2QiL9FlZY34uMBuWO-xsQKUReM6TV56DUE6EwZdGrF4344DoNzDN0dmiOB9-e_OkFIWish5smMwCva8PfzCP1Vi13p3QrjyomNevvfl_Ftu9zkp3UQLW3dlG7RhVoVWPwmkAMGokqxH59nHOPW_z6-ws8wD6ML4IMLVp1vXj3YvNVP0X8Iy3Jbdesmb10tqlpnI8zIk7hM23sg6rVKUKqIAs40y5SzfT8ArAeUOiTQIDnhTs_-p5b8ow=w1228-h666-s-no-gm?authuser=0)

![Mobile Screenshot](https://lh3.googleusercontent.com/pw/ABLVV84KVnOkAb9wEMTR8iL5FEVLmPxc5QgDfNCXY_vSs8UcYHmm-r4phAVv3PROe2Vpt5n3HroHsL8AO7IiaHP7WZal_dEcHET2vZppn3LPtXSZHXsBByMaNbS6W3cLW9B5gfFWICHgD6raJiekBgzsdHGtSYCr64Kcakd2imEUyIaocoqZS4Qf0CRiTG4GFgczmCB6lUUxrLrEGgZ7dIA7DCuXY3LPCagEObhIXon5ZVXfKNPw6JhW3qw0fc0gMgeQ6dad6G3M8q0aKxX9UbedH40QxNkl7WHFoAt0F6sKrua8tdnYOdDxvC7sAJespMf-khRD4lF5Wdi9AnLq-n1AV4-CBPX3OntEH1qRZJ5Q-vY_A_RzpZonmSZ9ZtjdEC-ASzT5uOBk5v7hGkla1deWM1oMv7XtNz4LI_BZYmp4jV2LGxo9HdJMCmPyZ7_ubfI9cCBMDlfb8Mie_-e1cvRNnzUAGVR7dTcaLTIX9E8lGHbshnyPpRrVUFCTYC3uKUW3_84qbUx2KsloZlEm1rFnqdnOQ1iiD1qAJBWr7gWa-pCHvUzd-tHd24GAYA2b-tBWMYwlSpVIu1hfluJZz61H-3IB3RgQepo4o7IJUFGSk6ZtrxjKto94vWkDWaDk277agBjfHwGUQaYpHGcBO396Q1AvKdKgFLSiLSbAHfX4931j_5gUih2GXPAx6KbZG4viSpzNNpuZs3mI6PTQ39g_XjD321ygJxgwwTaLde9Vt1dwWcadvEie_6dk8BXvCgdvW_RqZXFkE1n4lLyRLgKGT4y6oSni9IVCQvdyia8dR6roDAuBHLhY3CLs23rK0h2jd-HGovUPbwmzvn7u-8a02_nXf3NsbNHWioGGwSUvvqhOu01tx4uvWg6PYWACj9bxD8w=w501-h857-s-no-gm?authuser=0)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_KEY = "2dca580c2a14b55200e784d157207b4d"`

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Feedback

If you have any feedback, please reach out to us at deepghuge@gmail.com

9821959912 what's App
