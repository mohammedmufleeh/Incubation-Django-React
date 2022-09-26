from rest_framework import status
from urllib import request
from django.http import JsonResponse
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from base.models import Application
from base.serializers import ApplicationSerializer, UsesrSerializer, UserSerializerWithToken
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

# from rest_framework.views import APIView
# from base.models import Application
# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        
        for k, v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


def getRoutes(request):
    return JsonResponse('Hello', safe=False)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UsesrSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UsesrSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def registerUser(request):
    data = request.data

    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail':'User with this email already exist'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def application(request):
    data = request.data
    print(data)

    try:
        apilication = Application.objects.create(
            name=data['name'],
            Address=data['Address'],
            city=data['city'],
            state=data['state'], 
            email=data['email'],
            phone=data['phone'],
            companyname=data['companyname'],
            describtion_on_team=data['describtion_on_team'],
            describtion_on_company=data['describtion_on_company'],
            describtion_on_products=data['describtion_on_products'],
            describe_problem=data['describe_problem'],
            unique_about_solution=data['unique_about_solution'],
            value_proportion_for_customer=data['value_proportion_for_customer'],
            advantage_competative=data['advantage_competative'],
            revenue_model=data['revenue_model'],
            market_product_size=data['market_product_size'],
            how_market=data['how_market'],
            incubation_type=data['incubation_type'],
        )
        serializer = ApplicationSerializer(apilication, many=False)
        return Response(serializer.data)
    except:
        message = {'detail':'Form is not valid'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)