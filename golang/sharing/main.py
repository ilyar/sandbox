import sys
import ctypes

lib = ctypes.CDLL("lib.so")
lib.SayHello.restype = ctypes.c_char_p
print("\nThis is a Python Application.")
lib.SayHello("P Jack")
lib.SayBye()

sys.exit(0)
