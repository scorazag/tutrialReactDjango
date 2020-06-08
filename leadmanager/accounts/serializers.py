from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

#Usuario
class USerSerializer(serializers.ModelsSerializer):
    class Meta:
        model = User
        fields = ('id','username','email')
#Registro
class RegisterSerializer(serializers.ModelsSerializer):
    class Meta:
        model = User
        fields = ('id','username','email','password')
        extra_kwargs = {'password':{'write_only':True}}
    def create(self,validated_data):
        user = User.objects.create_user(validated_data['username'],validated_data['email'],validated_data['password'])

        return user

#Login
class LoginSerializer(self,data):
    username = serializer.Charfield()
    password = serializer.Charfield

    def validate(seld,data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializer.ValidationError("Incorrect Credentials")