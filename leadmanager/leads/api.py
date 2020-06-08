from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = LeadSerializer


    def get_queryset(self):
        return self.request.user.leads.all() 

    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)
    