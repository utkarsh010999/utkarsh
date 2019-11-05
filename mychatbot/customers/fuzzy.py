import os
import nltk
import xlrd
from nltk.stem import PorterStemmer
from nltk.stem.snowball import SnowballStemmer
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import RegexpTokenizer
from nltk.corpus import stopwords
from spellchecker import SpellChecker
from fuzzywuzzy import fuzz 
from fuzzywuzzy import process

words=[]
questions=[]
answers=[]
file= open("newwords.txt","w+")
ps = PorterStemmer()
stemmer = SnowballStemmer('english')
lemmatizer = WordNetLemmatizer()
spell = SpellChecker()
stop_words = set(stopwords.words('english'))
tokenizer = RegexpTokenizer(r'\w+')
#WORKING ON EXCEL FILE
wb = xlrd.open_workbook("C:\\Users\\rashi\\chat-frontend\\vikrant.vinkteck-master\\mychatbot\\customers\\data1.xls")
wb1 = xlrd.open_workbook("C:\\Users\\rashi\\chat-frontend\\vikrant.vinkteck-master\\mychatbot\\customers\\car_insurance.xlsx") 
sheet = wb.sheet_by_index(0)
sheet1 = wb1.sheet_by_index(0)
sheet.cell_value(0,0)
sheet1.cell_value(1,0)
for i in range(sheet.nrows): 
    words.append(sheet.cell_value(i, 0))
for j in range(sheet1.nrows): 
    questions.append(sheet1.cell_value(j, 0))
    answers.append(sheet1.cell_value(j, 1))

#TOKENIZING THE DATA INPUT
def tokenizing(text):
    list1=[]
    list2=[]
    list3=[]
    token = tokenizer.tokenize(text)
    for t in token:
        if not t in stop_words:
            list2.append(t)
    for e in list2:
        if e in words:
            r=words.index(e)
            list1.append(sheet.cell_value(r, 1))
        else:
            syn = lemmatizer.lemmatize(e)
            g=ps.stem(e)
            p=stemmer.stem(e)
            y=spell.word_probability(syn)
            y1=spell.word_probability(g)
            y2=spell.word_probability(p)
            if (y>=y1):
                if (y>=y2):
                    list3.append(syn)
                    list1.append(syn)
                else:
                    list3.append(p)
                    list1.append(p)
            elif (y1>=y2):
                if (y1>=y):
                    list3.append(g)
                    list1.append(g)
                else:
                    list3.append(syn)
                    list1.append(syn)
                    
            elif (y2>=y):
                if (y2>=y1):
                    list3.append(p)
                    list1.append(p)
                else:
                    list3.append(g)
                    list1.append(g)

    for i in list3:
        file.write(i)
    return list1

#MATCHING THE DATA
def matching(data1):
    list4=[]
    str1=""
    list5 = tokenizing(data1)
    for t in list5:
        str1=str1+t+''
    for q in questions:
        str2=""
        list6 = tokenizing(q)
        for d in list6:
            str2=str2+d+''
        ratio = fuzz.ratio(str1,str2)
        list4.append(ratio)
    maxvalue=max(list4)
    maxindex=int(list4.index(maxvalue))
    answer=answers[maxindex]
    if maxvalue >= 50:
        return(answer)
    else :
        return("re-enter")



            
            
