from rest_framework import serializers
from .models import UserRegistration


class UserRegistrationSerializers(serializers.ModelSerializer):
    class Meta:
        model=UserRegistration
        fields =["id","name","email","mobile_no","password","confirm_password","address","Profile_image","created_at","updated_at"]
        profile_image = serializers.ImageField()