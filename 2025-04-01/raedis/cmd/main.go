package main

import (
	"log"

	"github.com/herrmannplatz/raedis"
)

func main() {
	log.Println("Listening on port :6379")
	log.Fatal(raedis.Run(":6379"))
}
