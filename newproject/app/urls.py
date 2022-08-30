from unicodedata import name
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name="index"),
    path('index/contact', views.contact, name='contact'),
    path('index/enroll', views.enrollcourse, name='enroll'),
    path('index/course/python-course', views.python, name='python'),
    path('index/course/mern-course', views.mern, name='mern'),
    path('index/course/dataScienc-course', views.datascience, name='datascience'),
]
