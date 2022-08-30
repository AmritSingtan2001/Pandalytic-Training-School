from django.db import models


class ContactInfo(models.Model):
    fullname = models.CharField(max_length=50)
    email = models.CharField(max_length=150)
    phone_number = models.IntegerField()
    interestedcourse = models.CharField(max_length=100)
    messagesforus = models.TextField(max_length=250)
    class Meta:
        ordering =['-id',]
    
    def __str__(self):
        return self.fullname

class EnrollCourse(models.Model):
    fullname = models.CharField(max_length=50)
    email = models.CharField(max_length=150, unique=True)
    phone_number = models.IntegerField()
    locations = models.CharField(max_length=100, null=True)
    coursename = models.CharField(max_length=100)

    class Meta:
        ordering =['-id',]

    def __str__(self):
        return self.fullname +" "+ self.email

