# Song App API

## Overview

This API allows you to manage information for songs. You can create, retrieve, update, and delete songs. Additionally, it provides statistics about the songs in the database.

## Base URL

https://song-api-pncl.onrender.com/songs/

## Endpoints

### Get All Songs

- **URL:** `/`
- **Method:** `GET`
- **Description:** Lists all songs.
- **Response:**

  - Status Code: `200 OK`
  - Body:

    ```json
    [
      {
        "title": "Song Title",
        "artist": "Artist Name",
        "album": "Album Name",
        "genre": "Genre Name"
      }
    ]
    ```

### Create a Song

- **URL:** `/`
- **Method:** `POST`
- **Description:** Creates a new song.
- **Request Body:**
  ```json
  {
    "title": "Song Title",
    "artist": "Artist Name",
    "album": "Album Name",
    "genre": "Genre Name"
  }
  ```
- **Response:**
  - **Status Code:**` 201 Created`
  - **body:**
  ```json
  {
    "success": true,
    "message": "Song successfully added",
    "result": {
      "title": "Song Title",
      "artist": "Artist Name",
      "album": "Album Name",
      "genre": "Genre Name"
    }
  }
  ```

### Update a Song

- **URL:** `/:id`
- **Method:** `PUT`
- **Description:** Updates an existing song by ID.
- **Request Body:**
  ```json
  {
    "title": "Song Title",
    "artist": "Artist Name",
    "album": "Album Name",
    "genre": "Genre Name"
  }
  ```
- **Response:**
  - **Status Code:** `200 OK`
  - **body:**
  ```json
  {
    "success": true,
    "message": "Song updated successfully",
    "result": {
      "title": "Updated Song Title",
      "artist": "Updated Artist Name",
      "album": "Updated Album Name",
      "genre": "Updated Genre Name"
    }
  }
  ```

### Delete a Song

- **URL:** `/:id`
- **Method:** `DELETE`
- **Description:** Deletes a song by ID.
- **Response:**

  - **Status Code:** 200 OK
  - **body:**

  ```json
  {
    "success": true,
    "message": "Song deleted successfully"
  }
  ```

### Get Overall Statistics

- **URL:** `/stats`
- **Method:** `GET`
- **Description:** Generates overall statistics about the songs in the database.
- **Response:**

  - **Status Code:**`200 OK`
  - **Body**:

    ```json
    {
      "success": true,
      "message": "Successfully fetch overall statistics",
      "result": {
        "songsByGenre": [
          {
            "Genre": "Jazz",
            "TotalSongsByGenre": 3,
            "Songs": ["So What", "Take Five", "My Favorite Things"]
          },
          // More items...
        ],
        "songsByArtist": [
          {
            "Artist": "Guns N' Roses",
            "TotalSongsByArtist": 1,
            "Songs": ["Sweet Child o' Mine"]
          }
          // More items...
        ],
        "songsByAlbum": [
          {
            "Album": "Texas Flood",
            "TotalSongsByAlbum": 1,
            "Songs": ["Pride and Joy"]
          }
          // More items...
        ],
        "albumsByArtist": [
          {
            "Artist": "Guns N' Roses",
            "TotalAlbums": 1,
            "Albums": ["Appetite for Destruction"]
          }
          // More items...
        ]
      }
    }
    ```

- **Explanation:**
  - **totalSongs:** Total number of songs in the database.
  - **totalArtists:** Total number of artists in the database.
  - **totalAlbums:** Total number of albums in the database.
  - **totalGenres:** Total number of genres in the database.
  - **songsByGenre:** Array of objects containing the total number of songs in every genre
  - **songsByArtist"** Array of objects containing the total number of songs each artist has.
  - **songsByAlbum:** Array of objects containing the total number of songs in each album.
  - **albumsByArtist:** Array of objects containing the total number of albums each artist has.