
from django.urls import path
from base.views import user_views as views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
 
)

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name="routes"),
    path('profile/', views.getUserProfile, name="users_profile"),
    path('users/', views.getUsers, name="users"),
    path('register/', views.registerUser, name="registerUser"),
    path('application/', views.application, name="application"),
]