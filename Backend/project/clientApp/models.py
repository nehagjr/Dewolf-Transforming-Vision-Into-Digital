from django.db import models

# Create your models here.
class UserRegistration(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    mobile_no=models.IntegerField()
    password=models.CharField(max_length=40)
    confirm_password=models.CharField(max_length=40)
    address=models.CharField(max_length=700)
    Profile_image=models.ImageField(upload_to ="image",null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return self.name