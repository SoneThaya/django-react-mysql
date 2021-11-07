from django.urls import path

from .views import ProductFrontendAPIView


urlpatterns = [
    path('products/frontend/', ProductFrontendAPIView.as_view()),
]