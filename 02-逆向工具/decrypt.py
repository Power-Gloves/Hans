import hashlib
import sys
from Crypto.Cipher import AES

def decrypt_wxapkg(input_file, output_file, wxid):
    with open(input_file, 'rb') as f:
        data = f.read()

    # Check header
    if data[:6] != b'V1MMWX':
        print('Not a V1MMWX encrypted file')
        return False

    print(f'Decrypting {input_file} with wxid={wxid}...')
    print(f'File size: {len(data)} bytes')

    # Derive key
    dk = hashlib.pbkdf2_hmac('sha1', wxid.encode('utf-8'), b'saltiest', 1000, 32)
    print(f'Derived key: {dk.hex()}')
    print(f'Key first byte: 0x{dk[0]:02x}')

    iv = b'the iv: 16 bytes'

    # AES decrypt first 1024 bytes after 6-byte header
    encrypted_part = data[6:6+1024]
    cipher = AES.new(dk, AES.MODE_CBC, iv)
    decrypted_first = cipher.decrypt(encrypted_part)

    # XOR the rest - try with first byte of derived key
    xor_byte = dk[0]
    rest = data[6+1024:]
    decrypted_rest = bytes([b ^ xor_byte for b in rest])

    result = decrypted_first + decrypted_rest

    # Check validity
    print(f'Result first byte: 0x{result[0]:02x}')
    if result[0] == 0xBE:
        print('Valid wxapkg header!')
    else:
        print('Invalid header!')

    # Debug: show bytes around 1024 boundary
    print(f'\nBytes around 1024 boundary:')
    print(f'  Decrypted [1020:1024]: {decrypted_first[1020:1024].hex()} = {repr(decrypted_first[1020:1024])}')
    print(f'  XOR rest  [0:4]:      {decrypted_rest[0:4].hex()} = {repr(decrypted_rest[0:4])}')
    print(f'  Raw rest  [0:4]:      {rest[0:4].hex()} = {repr(rest[0:4])}')

    # Try to find correct XOR byte by checking what makes valid ASCII around boundary
    # We know the data around 1024 should be part of a file path
    print(f'\nTrying different XOR bytes around boundary:')
    for test_byte in range(256):
        test_result = bytes([b ^ test_byte for b in rest[:20]])
        try:
            text = test_result.decode('ascii')
            if all(c.isprintable() or c in '\r\n\t' for c in text):
                if any(c in text for c in 'abcdefghijklmnopqrstuvwxyz/-_.'):
                    print(f'  XOR 0x{test_byte:02x}: {repr(text)}')
        except:
            pass

    with open(output_file, 'wb') as f:
        f.write(result)

    print(f'\nSaved to {output_file}')
    return True

if __name__ == '__main__':
    input_file = sys.argv[1] if len(sys.argv) > 1 else '__APP__.wxapkg'
    output_file = sys.argv[2] if len(sys.argv) > 2 else '__APP__.decrypted.wxapkg'
    wxid = sys.argv[3] if len(sys.argv) > 3 else 'wxca87659badc84f9c'
    decrypt_wxapkg(input_file, output_file, wxid)
