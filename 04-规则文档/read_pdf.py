import fitz
import sys

doc = fitz.open(r'd:\项目\个人学习\tools\myRacing\2026CRKC卡丁车超级联赛-R1东莞站秩序册(3).pdf')
print(f'Total pages: {len(doc)}')

for i in range(len(doc)):
    text = doc[i].get_text()
    if text.strip():
        print(f'\n=== Page {i+1} ===')
        print(text)
