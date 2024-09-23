from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *


@api_view(['GET', 'POST']) 
def userlogin(request):
    if request.method=='GET':
        user=UserRegistration.objects.all()
        serializer=UserRegistrationSerializers(user,many=True)
        return Response(serializer.data)
    
    elif request.method=='POST':
        serializer=UserRegistrationSerializers(data=request.data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        else: return Response(serializer.errors)
    