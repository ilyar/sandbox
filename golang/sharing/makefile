BIN = app

LIB = lib
SRC = main

export LD_LIBRARY_PATH=$(PWD)

$(LIB).so:
	go build -o $(LIB).so -buildmode=c-shared $(SRC).go

build: $(LIB).so
	gcc -Wall -o $(BIN)c $(SRC).c $(LIB).so $(LDFLAGS)

run: build
	file $(LIB).so
	nm -D $(LIB).so | grep "T Say"
	@python3 main.py
	@./$(BIN)c

clear:
	rm -f $(BIN)*
	rm -f $(LIB)*
