package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
    content, err := ioutil.ReadFile("config_local.go.txt")
    if err != nil {
        content, err = ioutil.ReadFile("config.go.txt")
    }
    url := string(content)
    fmt.Printf("Request URL: %s\n", url)
    
    response, err := http.Get(url)
	body, err := ioutil.ReadAll(response.Body)
	response.Body.Close()
	fmt.Printf("%s", body)	
}