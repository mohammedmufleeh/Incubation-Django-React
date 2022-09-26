from django.urls import path
from base.views import admin_view as views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
 
)

urlpatterns = [
    path('getUsers/', views.getUsers, name="getUsers"),
    path('UserBlock/<int:id>/', views.unUserBlock, name="unUserBlock"),
    path('unUserBlock/<int:id>/', views.UserBlock, name="UserBlock"),
    path('view_app/', views.view_app, name="view_app"),
    path('view_application/<int:id>/', views.view_application, name="view_application"),
    path('edit_appA/<int:id>/', views.edit_appA, name="edit_appA"),
    path('app_delete/<int:id>/', views.app_delete, name="app_delete"),
    path('edit_appR/<int:id>/', views.edit_appR, name="edit_appR"),
    path('view_apps/', views.view_app_Approved, name="view_apps"),
    path('allapp/', views.allapp, name="allapp"),
    path('view_appss/', views.view_app_Rejected, name="view_appss"),
    path('slotes/', views.slotes, name="slotes"),
    path('AppGetout/<int:id>/', views.AppGetout, name="AppGetout"),
    path('ChengeSlot/<int:id>/', views.ChengeSlot, name="ChengeSlot"),
    path('Singleuserapp/<int:id>/', views.Singleuserapp, name="Singleuserapp"),
    path('AdminHome/', views.AdminHome, name="AdminHome"),

]
