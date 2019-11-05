from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Customer
from customers import fuzzy
#from .serializers import *
#from rest_framework import viewsets, permissions
#from mychatbot import main
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser
#from customers import main
#import json
from django.http import HttpResponse, JsonResponse

'''with open("/home/vikrant/Documents/chatbot/mychatbot/customers/intents.json") as file:
    data = json.load(file)

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = CustomerSerializer'''

#with open("C:\Users\rashi\chat-frontend\vikrant.vinkteck-master\mychatbot\customers\intents.json") as file:
    
    #data = json.load(file)

@api_view(['GET', 'POST'])
@parser_classes([JSONParser])
def customer_chat(request, format=None):
    d=request.data
    if request.method == 'GET' or 'POST':
        if(len(d)!=0):
            dx=(list(d.values())[0])
            print(dx)
            dt=fuzzy.matching(dx)
            print(dt)
            return Response({dt})
        else:
            return Response({'Give Data'})


def check(str):
    intent={'hii':'Hello!','hello':'Hello!','goodbye':'Talk to you later, Goodbye!','name':"I'm saarthi",}
    str=str.split()
    x=list(intent.keys())
    for i in str:
        if i in x:
            return intent[i]
    #if(str=='hii'):
        #return 'hello handsome'
        
    else:
        return("i don't get it please try again")


