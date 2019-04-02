# Sharing Golang packages to Xlang

```bash
$ make run
go build -o lib.so -buildmode=c-shared main.go
gcc -Wall -o appc main.c lib.so 
file lib.so
lib.so: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, BuildID[sha1]=7771f7caf6250cc89a48c5b28635d7688e8c2d6a, not stripped
nm -D lib.so | grep "T Say"
00000000000f3c30 T SayBye
00000000000f3bd0 T SayHello

This is a Python Application.
Golang says: Hello, P!
Golang says: Bye!

This is a C Application.
Golang says: Hello, C Jack!
Golang says: Bye!

```

## References

* [Go Execution Modes](https://docs.google.com/document/d/1nr-TQHw_er6GOQRsF6T43GGhFDelrAP0NqSS_00RgZQ/edit?pli=1)
* [Building Python modules with Go 1.5](https://blog.filippo.io/building-python-modules-with-go-1-5/)
* [Sharing Golang packages to C and Go](http://blog.ralch.com/tutorial/golang-sharing-libraries/)
* [Gopher Academy on libc shared libraries](https://blog.gopheracademy.com/advent-2015/libc-hooking-go-shared-libraries/)
