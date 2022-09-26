
from rest_framework.response import Response
from base.serializers import UserBockSerializer, AllUserSrializer, ApplicationSerializer, AppEditSerializer, ChangeSlotSerializer, SlotSerializer,ChangeApplicationSerializer
from ..models import Application, Slotbooking
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.contrib.auth.models import User



@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.filter(is_superuser=False )
    serializer = AllUserSrializer(users, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def UserBlock(request, id):
    edit = User.objects.get(id=id)
    change = UserBockSerializer(instance=edit, data=request.data)
    if change.is_valid():
        change.save()
    return Response(change.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def unUserBlock(request, id):
    edit = User.objects.get(id=id)
    change = UserBockSerializer(instance=edit, data=request.data)
    if change.is_valid():
        change.save()
    return Response(change.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def view_app(request):
    app = Application.objects.filter(status='Pending')
    serializer = ApplicationSerializer(app, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def AdminHome(request):
    app = Application.objects.all()
    serializer = ApplicationSerializer(app, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def view_app_Approved(request):
    app = Application.objects.filter(status='Approved')
    serializer = ApplicationSerializer(app, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def view_app_Rejected(request):
    app = Application.objects.filter(status='Rejected')
    serializer = ApplicationSerializer(app, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def edit_appA(request, id):
    edit = Application.objects.get(id=id)
    change = AppEditSerializer(instance=edit, data=request.data)
    if change.is_valid():
        change.save()
    return Response(change.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def edit_appR(request, id):
    edit = Application.objects.get(id=id)
    change = AppEditSerializer(instance=edit, data=request.data)
    if change.is_valid():
        change.save()
    return Response(change.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def app_delete(request, id):
    delete = Application.objects.get(id=id)
    delete.delete()
    return Response("Deleteg successfuly")

@api_view(['GET'])
@permission_classes([IsAdminUser])
def view_application(request, id):
    app = Application.objects.get(id=id)
    serializer = ApplicationSerializer(app, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def allapp(request):
    app = Application.objects.all()
    serializer = ApplicationSerializer(app, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def slotes(request):
    slot = Slotbooking.objects.all()
    serializer = SlotSerializer(slot, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def AppGetout(request, id):
    edit = Application.objects.get(id=id)
    change = ChangeApplicationSerializer(instance=edit, data=request.data)
    if change.is_valid():
        change.save()
    return Response(change.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def ChengeSlot(request, id):
    edit = Slotbooking.objects.get(id=id)
    change = ChangeSlotSerializer(instance=edit, data=request.data)
    if change.is_valid():
        change.save()
    return Response(change.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def Singleuserapp(request, id):
    app = Application.objects.get(id=id)
    serializer = ApplicationSerializer(app, many=False)
    return Response(serializer.data)




# def slotbooking(request):

