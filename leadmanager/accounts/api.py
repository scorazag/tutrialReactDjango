from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serilizers import UserSerializer,RegisterSerializer, LoginSerializer

#Registro
class RegisterAPI(generics.GenericAPIView):
    serilizer_class= RegisterSerializer

    def post(self,request,**args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user= serializer.save()
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_cotext()).data,
            "token":AuthToken,objects.create(user)
        })
#Login
class LoginAPI(generics.GenericAPIView):
    serilizer_class= LoginSerializer

    def post(self,request,**args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user= serializer.validated_data
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_cotext()).data,
            "token":AuthToken,objects.create(user)
        })

class UserAPI(generics.RetriveAPIView):
    permissions_classes = [
        permissions.IsAuthenticated,
    ]

    serilizer_class = UserSerializer

    def get_object(self):
        return self.request.user