from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.Serializer):
    title = serializers.CharField()
    content = serializers.CharField()