from django.contrib import admin
from .models import ContactInfo, EnrollCourse

class ContactAdmin(admin.ModelAdmin):
    model = ContactInfo
    list_display = ['id', 'fullname', 'email', 'phone_number', 'interestedcourse', 'messagesforus']

admin.site.register(ContactInfo, ContactAdmin)

class EnrollAdmin(admin.ModelAdmin):
    model = EnrollCourse
    list_display = ['id', 'fullname', 'email', 'phone_number', 'locations', 'coursename']

admin.site.register(EnrollCourse, EnrollAdmin)
