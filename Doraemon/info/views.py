from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.response import Response

# Create your views here.
def main(request):
    return HttpResponse("<h1>Welcome to Doraemon</h1>")

