package main

import "C"
import "fmt"

//export SayHello
func SayHello(name *C.char) {
	fmt.Printf("Golang says: Hello, %s!\n", C.GoString(name))
}

//export SayBye
func SayBye() {
	fmt.Println("Golang says: Bye!")
}

// We need the main function to make possible
// CGO compiler to compile the package as C shared library
func main() {}
