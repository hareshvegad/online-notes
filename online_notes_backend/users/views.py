from rest_framework import generics, permissions
from .serializers import UserSerializer
from django.contrib.auth.models import User

class RegisterUserAPIView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer
