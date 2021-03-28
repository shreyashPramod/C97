introString=input("enter your introduction")
print(introString)
characterCount=0
wordcount=1

for i in introString:
    characterCount=characterCount+1
    print(characterCount)
    if(i==' '):
        wordcount=wordcount+1
print(wordcount)
print(characterCount)
