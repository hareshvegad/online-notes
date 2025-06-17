from django.urls import path
from .views import NoteListCreateAPIView, NoteRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('', NoteListCreateAPIView.as_view(), name='note-list-create'),
    path('<int:pk>/', NoteRetrieveUpdateDestroyAPIView.as_view(), name='note-detail'),
]