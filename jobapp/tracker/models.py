from django.db import models
from django.conf import settings

# Create your models here.

class jobListing(models.Model):
    STATUS_CHOICES = [
        ('P','Pending'),
        ('S','Successful'),
        ('I','Interviewing'),
        ('R','Rejected'),
    ]
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    companyName = models.CharField(max_length=100)
    jobTitle = models.CharField(max_length=50)
    salary = models.FloatField()

    dateApplied = models.DateField()
    status = models.CharField(max_length=2,choices=STATUS_CHOICES)

    companyContact = models.EmailField()

    def __str__(self):
        return f"{self.companyName} - {self.jobTitle} for user {self.user.username}"
