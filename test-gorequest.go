package main

import (
	"fmt"
	"io/ioutil"
	"github.com/parnurzeal/gorequest"
)

func main() {
    content, err := ioutil.ReadFile("config_local.go.txt")
    if err != nil {
        content, err = ioutil.ReadFile("config.go.txt")
    }
    url := string(content)
    fmt.Printf("Request URL: %s\n", url)

    
    _, body, _ := gorequest.New().Get(url).End()
    fmt.Println(body)
}