# from .models import Application


from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Application, Slotbooking

class UsesrSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
 
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff
    
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        
        return name

class UserSerializerWithToken(UsesrSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token']
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token)

class AllUserSrializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class UserBockSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['is_active']

class ApplicationSerializer(serializers.ModelSerializer):
    # companylogo = serializers.ImageField(max_length=None,use_url=True)
    class Meta:
        model = Application
        fields = "__all__"
        


    def validate_phone(self,value):
        if len(value)<10 or len(value)>10:
            raise serializers.ValidationError("Phone Number must be 10 characters")
        else:
            return value

class AppEditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ['status']

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slotbooking
        fields='__all__'

class ChangeApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ['slotactive']

class ChangeSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slotbooking
        fields = ['Active', 'company']


