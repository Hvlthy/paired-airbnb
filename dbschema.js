/*
Table Users {
    id integer pk
    first_name string
    last_name string
    email string
    username string
    isOwner boolean
}

Table Spots {
  id integer pk
  ownerId integer
  address string
  city string
  state string
  country string
  lat decimal
  lon decimal
  name string
  description string
  price decimal
  avgRating decimal
  previewImg string
}

Table Bookings {
  id integer pk
  spotId integer
  userId integer
  startDate date
  endDate date
}

Table Reviews {
  id integer pk
  userId integer
  spotId integer
  review string
  stars decimal
}

Table Imgs {
  id integer pk
  url string
}


Ref: "Users"."id" < "Spots"."ownerId"

Ref: "Spots"."id" < "Bookings"."spotId"

Ref: "Users"."id" < "Bookings"."userId"

Ref: "Users"."id" < "Reviews"."userId"

Ref: "Spots"."id" < "Reviews"."spotId"

Ref: "Reviews"."id" < "Spots"."avgRating"

Ref: "Spots"."previewImg" < "Imgs"."id"
*/