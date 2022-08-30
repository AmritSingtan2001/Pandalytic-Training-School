
from django.shortcuts import render, HttpResponse
from .models import ContactInfo, EnrollCourse
from django.contrib import messages
from django.conf import settings
from django.core.mail import send_mail

def index(request):
    return render(request, 'app/home.html')

def contact(request):
    if request.method == "POST":
        name = request.POST.get('fullname')
        emailaddress = request.POST.get('email')
        contact = request.POST.get('contact')
        course = request.POST.get('course')
        messagesus = request.POST.get('textarea1')
        print(contact)
        data = ContactInfo(fullname =name, email= emailaddress, phone_number= contact, interestedcourse = course, messagesforus= messagesus)
        data.save()
        messages.success(request,'Message send successfully!!')
        return render(request,'app/contactTra.html')
    else:
        return render(request,'app/contactTra.html')

def enrollcourse(request):
    if request.method == "POST":
        name = request.POST.get('fullname')
        emailaddress = request.POST.get('email')
        em_address = emailaddress.strip()
        location = request.POST.get('location')
        contact = request.POST.get('contact')
        course = request.POST.get('course')
        print(location)
        print(emailaddress)
        if EnrollCourse.objects.filter(email = emailaddress).exists():
            messages.error(request,'You already Enroll course using these E-mail!!')
            return render(request,'app/enroll.html')
        else:
            enroll = EnrollCourse(fullname = name,email = emailaddress, phone_number= contact, locations= location, coursename= course)
            enroll.save()
            data ="Successfully submited!!"
            subject ="Enroll Course"
            message =f"hi,"+name +"Thank you! for enroll our course. We will contact you latter."
            email_from = settings.EMAIL_HOST_USER
            recipient_list =[em_address]
            send_mail(subject, message, email_from, recipient_list)
            # messages.success(request,'Successfully submited!!')
            return render(request,'app/enroll.html',{'data':data})
    else:
        return render(request,'app/enroll.html')


def python(request):
    return render(request,'app/course-python.html')

def mern(request):
    return render(request,'app/course-mern.html')

def datascience(request):
    return render(request,'app/course-dataScience.html')